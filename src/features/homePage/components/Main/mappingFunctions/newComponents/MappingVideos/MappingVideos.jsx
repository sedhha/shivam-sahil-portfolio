import React from 'react';
import classes from './MappingVideos.module.scss';
import { getMainHeading } from '../../utility';
// import Video from './VideoContainer';
import Video from './VideoContainerReactPlayer';

export function MappingVideos(props) {
  const { sectionVideos, onVideoClickHandler } = props;
  const VideosHeading = getMainHeading(
    sectionVideos.heading,
    sectionVideos.headingStyle,
    classes
  );
  return sectionVideos?.showSection ? (
    <section className={classes.MappingVideo} id={sectionVideos.id}>
      {VideosHeading}
      <div
        className={[classes.VideoGrid, classes.StyledScrollBarClass].join(' ')}>
        {sectionVideos.videoComponents.elements.map((element, index) => (
          <div className={classes.Videos} key={element.id}>
            <Video
              index={index}
              key={index}
              heading={element.heading}
              video_id={'https://www.youtube.com/watch?v=' + element.video_id}
              onVideoClickHandler={onVideoClickHandler}
            />
          </div>
        ))}
      </div>
    </section>
  ) : null;
}

/*
            <Video
              index={index}
              key={index}
              heading={element.heading}
              video_id={element.video_id}
              onVideoClickHandler={onVideoClickHandler}
            />
            <ReactPlayer
              index={index}
              key={index}
              heading={element.heading}
              url={'https://www.youtube.com/watch?v=' + element.video_id}
              onVideoClickHandler={onVideoClickHandler}
            />
*/

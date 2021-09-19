import React from 'react';
import classes from './MappingVideos.module.scss';
import { getMainHeading } from '../../utility';
import Video from './VideoContainer';

export function MappingVideos(props) {
  const { sectionVideos, onVideoClickHandler } = props;
  const VideosHeading = getMainHeading(
    sectionVideos.heading,
    sectionVideos.headingStyle,
    classes
  );
  // const [showVideo, setShowVideo] = React.useState(false);
  // const YT = iconsMap.youtube;
  return sectionVideos?.showSection ? (
    <section className={classes.MappingVideo} id={sectionVideos.id}>
      {VideosHeading}
      <div
        className={[classes.VideoGrid, classes.StyledScrollBarClass].join(' ')}>
        {sectionVideos.videoComponents.elements.map((element, index) => (
          <Video
            index={index}
            key={index}
            heading={element.heading}
            video_id={element.video_id}
            onVideoClickHandler={onVideoClickHandler}
          />
        ))}
      </div>
    </section>
  ) : null;
}

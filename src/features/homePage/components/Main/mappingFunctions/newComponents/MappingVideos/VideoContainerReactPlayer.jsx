import React from 'react';
import classes from './MappingVideos.module.scss';
import ReactPlayer from 'react-player';

const embedOptions = {
  youtube: {
    playerVars: {
      controls: 1,
      fs: 1,
      modestbranding: 1,
    },
  },
};
export default function VideoContainer(props) {
  const { index, heading, video_id, onVideoClickHandler } = props;

  return (
    <div className={classes.VideoElements_RP}>
      <label
        className={
          index % 3 === 0
            ? classes.GridLabel_blue
            : index % 2 === 0
            ? classes.GridLabel_orange
            : classes.GridLabel_green
        }>
        {heading}
      </label>
      <div className={classes.Videos}>
        <ReactPlayer
          className={classes.reactPlayer}
          width='100%'
          height='100%'
          config={embedOptions}
          url={'https://www.youtube.com/watch?v=' + video_id}
          //   onVideoClickHandler={onVideoClickHandler}
          onPlay={() => onVideoClickHandler('onPlayEvent__' + video_id)}
          onPause={() => onVideoClickHandler('onPauseEvent__' + video_id)}
          onEnded={() => onVideoClickHandler('onEndedEvent__' + video_id)}
        />
      </div>
    </div>
  );
}

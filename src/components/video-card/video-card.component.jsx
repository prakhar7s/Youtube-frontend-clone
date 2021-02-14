import React from "react";

// SCSS File
import "./video-card.styles.scss";

// ICONS
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const VideoCard = (props) => {
  const {
    thumbnail,
    title,
    channelName,
    channelPicture,
    views,
    uploaded,
  } = props;

  return (
    <div className="video-card">
      <div className="thumbnail">
        <img src={thumbnail} alt="thumbnail" />
        <div className="channel-pic">
          <img src={channelPicture} alt="channel-picture" />
        </div>
      </div>
      <div className="title">{title}</div>
      <div className="channel-name">
        <span> {channelName} </span>
        <CheckCircleIcon />
      </div>
      <div className="lower">
        <span>{views}</span>
        <span>•</span>
        <span>{uploaded}</span>
      </div>
    </div>
  );
};

export default VideoCard;

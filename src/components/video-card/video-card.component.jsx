import React from "react";

// SCSS File
import "./video-card.styles.scss";

// ICONS
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { connect } from "react-redux";

const VideoCard = (props) => {
  const {
    thumbnail,
    title,
    channelName,
    channelPicture,
    views,
    uploaded,
    darkTheme,
  } = props;

  return (
    <div className={`video-card${darkTheme ? " dark-mode" : ""}`}>
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

const mapStateToProps = (state) => ({
  darkTheme: state.themeReducer.darkTheme,
});

export default connect(mapStateToProps)(VideoCard);

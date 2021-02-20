import React from "react";

// SCSS File
import "./video-card.styles.scss";

// ICONS
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { connect } from "react-redux";

const VideoCard = (props) => {
  const {
    thumbnails,
    title,
    channelTitle,
    channelPicture,
    views,
    publishedAt,
    darkTheme,
  } = props;

  return (
    <div className={`video-card${darkTheme ? " dark-mode" : ""}`}>
      <div className="thumbnail">
        <img src={thumbnails.high.url} alt="thumbnail" />
        {/* <div className="channel-pic">
          <img src={channelPicture} alt="channel-picture" />
        </div> */}
      </div>
      <div className="title">{title}</div>
      <div className="channel-name">
        <span> {channelTitle} </span>
        <CheckCircleIcon />
      </div>
      <div className="lower">
        {/* <span>{views}</span> */}
        {/* <span>•</span> */}
        <span>{new Date(publishedAt).toLocaleString()}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  darkTheme: state.featuresReducer.darkTheme,
});

export default connect(mapStateToProps)(VideoCard);

import React from "react";

// SCSS File
import "./homepage-videos.styles.scss";

// Components
import VideoCard from "../video-card/video-card.component";

// Data
import homePageVideos from "../../assets/data/homePageVideos";
import { connect } from "react-redux";

const HomePageVideos = ({ darkTheme }) => (
  <div className={`home-page-videos-container${darkTheme ? " dark-mode" : ""}`}>
    <h1 className="heading">Trending Videos</h1>
    <div className="home-page-videos">
      {homePageVideos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  darkTheme: state.themeReducer.darkTheme,
});

export default connect(mapStateToProps)(HomePageVideos);

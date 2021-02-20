import React, { useState } from "react";

// SCSS File
import "./homepage-videos.styles.scss";

// Components
import VideoCard from "../video-card/video-card.component";

// Data
import { connect } from "react-redux";

const HomePageVideos = ({ darkTheme, searchQuery, searchedVideos }) => {
  return (
    <div
      className={`home-page-videos-container${darkTheme ? " dark-mode" : ""}`}
    >
      <h1 className="heading">{searchQuery}</h1>
      <div className="home-page-videos">
        {searchedVideos.map((video) => (
          <VideoCard key={video.id.videoId} {...video.snippet} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  darkTheme: state.featuresReducer.darkTheme,
  searchQuery: state.searchVideosReducer.searchQuery,
  searchedVideos: state.searchVideosReducer.searchedVideos,
});

export default connect(mapStateToProps)(HomePageVideos);

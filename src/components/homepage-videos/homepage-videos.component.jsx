import React from "react";

// SCSS File
import "./homepage-videos.styles.scss";

// Components
import VideoCard from "../video-card/video-card.component";

// Data
import homePageVideos from "../../assets/data/homePageVideos";

const HomePageVideos = () => (
  <div className="home-page-videos">
    {homePageVideos.map((video) => (
      <VideoCard key={video.id} {...video} />
    ))}
  </div>
);

export default HomePageVideos;

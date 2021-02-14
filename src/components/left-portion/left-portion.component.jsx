import React from "react";
import Advertisement from "../advertisement/advertisement.component";
import Header from "../header/header.component";
import HomePageVideos from "../homepage-videos/homepage-videos.component";
import TrendingInterests from "../trending-interests/trending-interests.component";

import "./left-portion.styles.scss";

const LeftPortion = () => (
  <div className="left-portion">
    <Header />
    <TrendingInterests />
    <Advertisement />
    <HomePageVideos />
  </div>
);

export default LeftPortion;

import React from "react";
import { connect } from "react-redux";
import Advertisement from "../advertisement/advertisement.component";
import Header from "../header/header.component";
import HomePageVideos from "../homepage-videos/homepage-videos.component";
import TrendingInterests from "../trending-interests/trending-interests.component";

import "./left-portion.styles.scss";

const LeftPortion = ({ darkTheme }) => (
  <div className={`left-portion${darkTheme ? " dark-mode" : ""}`}>
    <Header />
    <TrendingInterests />
    <Advertisement />
    <HomePageVideos />
  </div>
);

const mapStateToProps = (state) => ({
  darkTheme: state.themeReducer.darkTheme,
});

export default connect(mapStateToProps)(LeftPortion);

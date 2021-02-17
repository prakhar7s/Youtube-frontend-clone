import React from "react";
import { connect } from "react-redux";
import LeftPortion from "../../components/left-portion/left-portion.component";
import Sidebar from "../../components/sidebar/sidebar.component";

import "./youtube-home.styles.scss";

const YoutubeHome = ({ darkTheme }) => (
  <div className={`youtube-home${darkTheme ? " dark-mode" : ""}`}>
    <Sidebar />
    <LeftPortion />
  </div>
);

const mapStateToProps = (state) => ({
  darkTheme: state.themeReducer.darkTheme,
});

export default connect(mapStateToProps)(YoutubeHome);

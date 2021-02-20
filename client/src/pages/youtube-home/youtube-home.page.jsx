import React from "react";
import { connect } from "react-redux";
import LeftPortion from "../../components/left-portion/left-portion.component";
import Sidebar from "../../components/sidebar/sidebar.component";

import "./youtube-home.styles.scss";

const YoutubeHome = ({ darkTheme, toggleSidebar }) => (
  <div
    className={`youtube-home${darkTheme ? " dark-mode" : ""}${
      toggleSidebar ? " hide-sidebar" : ""
    }`}
  >
    <Sidebar />
    <LeftPortion />
  </div>
);

const mapStateToProps = (state) => ({
  darkTheme: state.featuresReducer.darkTheme,
  toggleSidebar: state.featuresReducer.toggleSidebar,
});

export default connect(mapStateToProps)(YoutubeHome);

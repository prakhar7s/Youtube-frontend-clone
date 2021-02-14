import React from "react";
import LeftPortion from "../../components/left-portion/left-portion.component";
import Sidebar from "../../components/sidebar/sidebar.component";

import "./youtube-home.styles.scss";

const YoutubeHome = () => (
  <div className="youtube-home">
    <Sidebar />
    <LeftPortion />
  </div>
);

export default YoutubeHome;

import React from "react";

// SCSS File
import "./advertisement.styles.scss";

// ICONS
import YouTubeIcon from "@material-ui/icons/YouTube";

const Advertisement = () => (
  <div className="youtube-ad">
    <div className="about-ad">
      <div className="upper">
        <img
          src="https://www.gstatic.com/youtube/img/promos/growth/864dc47e45a7a0b06602f73155980de282b939a6d0adc7bdcda231f965bf796a_640x48.png"
          alt="about-ad"
        />
      </div>
      <div className="lower">1 household. 6 accounts. 1 great price.</div>
    </div>
    <div className="image">
      <img
        src="https://www.gstatic.com/youtube/img/promos/growth/a401382c00a66a52c6f1926f784758e2236b11e353e2783daac7a69a589d80f3_2560x520.png"
        alt="advertisment"
      />
    </div>
    <button className="one-month-free-btn">1 Month Free</button>
  </div>
);

export default Advertisement;

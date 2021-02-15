import React from "react";

import { Link } from "react-router-dom";

// SCSS file
import "./header.styles.scss";

// ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import TheatersIcon from "@material-ui/icons/Theaters";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ListIcon from "@material-ui/icons/List";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => (
  <div className="header">
    <div className="options first-options-set">
      <Link className="option">
        <MenuIcon />
      </Link>
      <Link className="option active">
        <HomeIcon />
      </Link>
      <Link className="option">
        <WhatshotIcon />
      </Link>
      <Link className="option">
        <TheatersIcon />
      </Link>
    </div>
    <div className="search-field">
      <input type="text" name="search-text" placeholder="Search" />
    </div>
    <div className="options second-options-set">
      <Link className="option">
        <VideoCallIcon />
      </Link>
      <Link className="option">
        <ListIcon />
      </Link>
      <Link className="option">
        <NotificationsIcon />
      </Link>
      <Link className="option">
        <TheatersIcon />
      </Link>
    </div>
  </div>
);
export default Header;

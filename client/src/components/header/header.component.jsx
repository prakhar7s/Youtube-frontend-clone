import React, { useEffect, useState } from "react";

import axios from "axios";

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
import NightsStayIcon from "@material-ui/icons/NightsStay";

import {
  enableDarkMode,
  toggleSidebar,
} from "../../redux/reducers/features/features-actions";
import {
  setSearchQuery,
  setSearchedVideos,
} from "../../redux/reducers/search-videos/search-videos-actions";

// Redux
import { connect } from "react-redux";

const Header = ({
  darkTheme,
  enableDarkMode,
  toggleSidebarValue,
  toggleSidebar,
  setSearchQuery,
  setSearchedVideos,
}) => {
  const [searchQueryString, setSearchQueryString] = useState("");

  const handleSearchVideos = (e) => {
    e.preventDefault();
    setSearchQuery(searchQueryString);

    //Fetch Seached Videos
    fetchVideosAndSet(searchQueryString);
  };

  useEffect(() => {
    fetchVideosAndSet("2021 trending");
  }, []);

  const fetchVideosAndSet = (query) => {
    axios
      .post("http://localhost:3004/youtube-videos", {
        header: {
          "Content-Type": "application/json",
        },
        body: {
          searchQuery: query,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setSearchedVideos(res.data);
        }
      });
  };

  return (
    <div className={`header${darkTheme ? " dark-mode" : ""}`}>
      <div className="options first-options-set">
        <Link
          className={`option${toggleSidebarValue === false ? " active" : ""}`}
          onClick={() => {
            toggleSidebar();
          }}
        >
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
      <form onSubmit={(e) => handleSearchVideos(e)} className="search-field">
        <input
          type="text"
          name="search-text"
          onChange={(e) => setSearchQueryString(e.target.value)}
          placeholder="Search"
        />
        <button style={{ display: "none" }} type="submit"></button>
      </form>
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
        <Link
          className={`option${darkTheme ? " active" : ""}`}
          onClick={(e) => {
            enableDarkMode();
          }}
        >
          <NightsStayIcon />
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  darkTheme: state.featuresReducer.darkTheme,
  toggleSidebarValue: state.featuresReducer.toggleSidebar,
});

const mapDispatchToProps = (dispatch) => ({
  enableDarkMode: () => dispatch(enableDarkMode()),
  setSearchQuery: (query) => dispatch(setSearchQuery(query)),
  setSearchedVideos: (videosArr) => dispatch(setSearchedVideos(videosArr)),
  toggleSidebar: () => dispatch(toggleSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

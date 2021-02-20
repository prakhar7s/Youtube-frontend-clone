import React from "react";
import { Link } from "react-router-dom";

// SCSS file
import "./sidebar.styles.scss";

// ICONS
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import HistoryIcon from "@material-ui/icons/History";
import MovieIcon from "@material-ui/icons/Movie";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";

// Subscribers List
import subscriptionsList from "../../assets/data/subscriptionsList";

// Redux
import { connect } from "react-redux";

const Sidebar = (props) => {
  const { darkTheme, toggleSidebar } = props;
  return (
    <div
      className={`sidebar${darkTheme === true ? " dark-mode" : ""}${
        toggleSidebar ? " hide-sidebar" : ""
      }`}
    >
      <div className="logo">
        <YouTubeIcon />
        <span>YouTube</span>
      </div>
      <div className="navigation-options">
        <Link className="option">
          <LibraryAddIcon />
          <span>Library</span>
        </Link>
        <Link className="option">
          <HistoryIcon />
          <span>History</span>
        </Link>
        <Link className="option">
          <MovieIcon />
          <span>Your videos</span>
        </Link>
        <Link className="option">
          <WatchLaterIcon />
          <span>Watch later</span>
        </Link>
        <Link className="option">
          <ThumbUpAltIcon />
          <span>Liked videos</span>
        </Link>
        <Link className="option">
          <ExpandMoreIcon />
          <span>Show more</span>
        </Link>
      </div>
      <h3 className="sidebar-headings">subscriptions</h3>
      <div className="navigation-options subscriptions-list">
        {subscriptionsList.map((subscription) => (
          <a
            key={subscription.id}
            href={subscription.channelLink}
            className="option"
          >
            <img src={subscription.channelPicture} />
            <span>{subscription.channelName}</span>
          </a>
        ))}
        <Link className="option">
          <ExpandMoreIcon />
          <span>Show 17 more</span>
        </Link>
      </div>
      <h3 className="sidebar-headings">more from youtube</h3>
      <div className="navigation-options more-from-yt">
        <Link className="option">
          <YouTubeIcon />
          <span>Youtube Premium</span>
        </Link>
        <Link className="option">
          <SportsEsportsIcon />
          <span>Gaming</span>
        </Link>
        <Link className="option">
          <LiveTvIcon />
          <span>Live</span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  darkTheme: state.featuresReducer.darkTheme,
  toggleSidebar: state.featuresReducer.toggleSidebar,
});

export default connect(mapStateToProps)(Sidebar);

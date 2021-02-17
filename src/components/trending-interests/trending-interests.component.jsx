import { Link } from "react-router-dom";
import React from "react";

// SCSS File
import "./trending-interests.styles.scss";

// ICONS
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";

const TrendingInterests = ({ darkTheme }) => (
  <div className={`trending-interests${darkTheme ? " dark-mode" : ""}`}>
    <div className="interests">
      <Link className="topics active">All</Link>
      <Link className="topics">Stronghold Kingdoms</Link>
      <Link className="topics">Beats</Link>
      <Link className="topics">Rapping</Link>
      <Link className="topics">Inter</Link>
      <Link className="topics">Javascript</Link>
      <Link className="topics">Python</Link>
      <Link className="topics">Mixes</Link>
      <Link className="topics">Memes</Link>
      <Link className="topics">Cartoons</Link>
      <div className="see-more">
        <ChevronRightIcon />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  darkTheme: state.themeReducer.darkTheme,
});

export default connect(mapStateToProps, null)(TrendingInterests);

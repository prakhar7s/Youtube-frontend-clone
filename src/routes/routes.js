import React from "react";

import { Switch, Route } from "react-router-dom";
import YoutubeHome from "../pages/youtube-home/youtube-home.page";

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" exact component={YoutubeHome} />
    </Switch>
  </div>
);

export default Routes;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../pages/Home";
import Movie from "../../pages/Asset";
import Player from "../../pages/Player";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/player/:assetType/:id" component={Player} />
      <Route path="/:assetType/:id" component={Movie} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;

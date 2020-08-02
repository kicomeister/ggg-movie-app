import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../pages/Home";
import Movie from "../../pages/Asset";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/movie/:id" component={Movie} />
      <Route path="/series/:seriesId" component={Movie} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;

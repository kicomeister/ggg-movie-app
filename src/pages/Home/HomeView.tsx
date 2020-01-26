import React from "react";

import "./style.css";
import { Search } from "../../containers";
import Watchlist from "../../containers/Watchlist";

const HomeView = () => (
  <div className="Home">
    <Search />
    <Watchlist />
  </div>
);

export default HomeView;

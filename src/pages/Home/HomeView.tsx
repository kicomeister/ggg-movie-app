import React from "react";
import { observer } from "mobx-react";

import "./style.css";
import { Search } from "../../containers";
import Watchlist from "../../containers/Watchlist";
import Movielist from "../../components/Movielist";
import { useStore } from "../../store";

const HomeView = () => {
  const store = useStore();

  return (
    <div className="Home">
      <Search />
      <Movielist title="Cinema" movies={store.movies.movies.onCinema} />
      <Watchlist />
    </div>
  );
};

export default observer(HomeView);

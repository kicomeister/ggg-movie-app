import React from "react";
import { observer } from "mobx-react";

import "./style.css";
import { Search } from "../../containers";
import Watchlist from "../../containers/Watchlist";
import Lane from "../../components/Lane";
import { useStore } from "../../store";
import { GENRES } from "../../constants";

const { DOCUMENTARY, FAMILY } = GENRES;

const HomeView = () => {
  const store = useStore();

  return (
    <div className="Home">
      <Search />
      <Lane title="Popular movies" items={store.movies.movies.popular} />
      <Lane title="Popular series" items={store.movies.movies.popularSeries} />
      <Lane title="Family" items={store.movies.movies.genres[FAMILY]} />
      <Lane title="Documentary" items={store.movies.movies.genres[DOCUMENTARY]} />
      <Watchlist />
    </div>
  );
};

export default observer(HomeView);

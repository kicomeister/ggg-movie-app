import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Router from "./Router";
import { observer } from "mobx-react-lite";

import { useStore } from "../../store";
import { GENRES } from "../../constants";

const { DOCUMENTARY, FAMILY } = GENRES;

const App = () => {
  const store = useStore();
  useEffect(() => {
    store.app.configure();
    store.genres.getGenres();
    store.movies.getPopular();
    store.movies.getPopular(true);
    store.movies.getByGenre(FAMILY);
    store.movies.getByGenre(DOCUMENTARY);
  }, [store.app, store.genres, store.movies]);
  return <Router />;
};

export default observer(App);

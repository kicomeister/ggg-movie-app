import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react";

import MovieView from "./MovieView";
import { useStore } from "../../store";

interface IRouteParams {
  id: string;
}

const Movie = ({ match }: RouteComponentProps<IRouteParams>) => {
  const store = useStore();

  useEffect(() => {
    store.movie.fetchMovie(match.params.id);
  }, [match.params.id, store.movie]);

  return <MovieView movie={store.movie.data} isLoading={store.movie.isFetching} />;
};

export default observer(Movie);

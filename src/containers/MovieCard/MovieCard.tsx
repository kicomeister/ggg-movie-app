import React, { useCallback } from "react";
import { observer } from "mobx-react";

import MovieCardView from "./MovieCardView";
import { IAsset } from "../../models/Asset";
import { useStore } from "../../store";

export interface IProps {
  asset: IAsset;
}

const MovieCard = ({ asset }: IProps) => {
  const store = useStore();
  const posterPath = (asset.poster_path && store.app.getImageUrl(asset.poster_path)) || "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
  const isInWatchlist = store.myMovies.contains(asset);
  const handleWatchlistClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      e.preventDefault();
      if (store.myMovies.contains(asset)) {
        store.myMovies.removeMovie(asset);
      } else {
        store.myMovies.addMovie(asset);
      }
    },
    [asset, store.myMovies],
  );
  return <MovieCardView asset={asset} posterPath={posterPath} isInWatchlist={isInWatchlist} onWatchlistClick={handleWatchlistClick} />;
};

export default observer(MovieCard);

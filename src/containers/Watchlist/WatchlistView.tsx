import React from "react";

import Heading from "../../components/Heading";
import MovieCard from "../../containers/MovieCard";
import { IAsset } from "../../models/Asset";

import "./style.css";

export interface IProps {
  myMovies: IAsset[];
  isEmpty: boolean;
}

const WatchlistView = ({ myMovies, isEmpty }: IProps) => (
  <div className="Watchlist">
    <Heading>Watchlist</Heading>
    <div className="Watchlist__results">{isEmpty ? "You don't have any movies added to your watchlist." : myMovies.map(movie => <MovieCard key={movie.id} asset={movie} />)}</div>
  </div>
);

export default WatchlistView;

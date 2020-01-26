import React from "react";
import { observer } from "mobx-react";
import { IMovie } from "../../models/Movie";
import MovieDetailsView from "./MovieDetailsView";
import { useStore } from "../../store";

export interface IProps {
  movie: IMovie;
}

const MovieDetails = ({ movie }: IProps) => {
  const store = useStore();
  const backgroundImageUrl = movie.backdrop_path ? store.app.getImageUrl(movie.backdrop_path) : null;
  const genre = Array.isArray(movie.genres) && movie.genres.length ? movie.genres[0] : null;
  return <MovieDetailsView movie={movie} backgroundImageUrl={backgroundImageUrl} genre={genre} />;
};

export default observer(MovieDetails);

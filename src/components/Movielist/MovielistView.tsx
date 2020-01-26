import React from "react";

import Heading from "../Heading";
import MovieCard from "../../containers/MovieCard";
import { IMovie } from "../../models/Movie";

import "./style.css";

export interface IProps {
  movies: IMovie[];
  title: string;
}

const MovielistView = ({ movies, title }: IProps) =>
  movies.length ? (
    <div className="Movielist">
      <Heading>{title}</Heading>
      <div className="Movielist__results">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  ) : null;

export default MovielistView;

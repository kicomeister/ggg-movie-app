import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import heartF from "@iconify/icons-jam/heart-f";
import heart from "@iconify/icons-jam/heart";
import classnames from "classnames";

import { IMovie } from "../../models/Movie";

import "./style.css";

export interface IProps {
  movie: IMovie;
  posterPath: string;
  isInWatchlist: boolean;
  onWatchlistClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const MovieCardView = ({ movie, posterPath, isInWatchlist, onWatchlistClick }: IProps) => (
  <Link className="MovieCard" to={`/movie/${movie.id}`}>
    <div className="MovieCard__buttons">
      <span onClick={onWatchlistClick}>
        <Icon className={classnames("MovieCard__icon", { "MovieCard__icon--selected": isInWatchlist })} icon={isInWatchlist ? heartF : heart}></Icon>
      </span>
    </div>
    <img className="MovieCard__img" alt={movie.title} src={posterPath} />
    <div className="MovieCard__title">{movie.title}</div>
  </Link>
);

export default MovieCardView;

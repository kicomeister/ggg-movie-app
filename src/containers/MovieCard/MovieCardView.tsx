import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import heartF from "@iconify/icons-jam/heart-f";
import heart from "@iconify/icons-jam/heart";
import classnames from "classnames";

import { IAsset } from "../../models/Asset";

import "./style.css";

export interface IProps {
  asset: IAsset;
  posterPath: string;
  isInWatchlist: boolean;
  onWatchlistClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const MovieCardView = ({ asset, posterPath, isInWatchlist, onWatchlistClick }: IProps) => (
  <Link className="MovieCard" to={`/${asset.isSeries ? "series" : "movie"}/${asset.id}`}>
    <div className="MovieCard__buttons">
      <span onClick={onWatchlistClick}>
        <Icon className={classnames("MovieCard__icon", { "MovieCard__icon--selected": isInWatchlist })} icon={isInWatchlist ? heartF : heart}></Icon>
      </span>
    </div>
    <img className="MovieCard__img" alt={asset.title} src={posterPath} />
    <div className="MovieCard__title">{asset.title}</div>
  </Link>
);

export default MovieCardView;

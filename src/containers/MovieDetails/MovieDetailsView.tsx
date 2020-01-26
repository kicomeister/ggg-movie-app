import React from "react";

import { IMovie } from "../../models/Movie";
import { Nullable, formatDate } from "../../util";
import { IGenre } from "../../models/Genre";

import "./style.css";

export interface IProps {
  movie: IMovie;
  backgroundImageUrl: Nullable<string>;
  genre: Nullable<IGenre>;
}

const MovieDetailsView = ({ movie, backgroundImageUrl, genre }: IProps) => (
  <div className="MovieDetails" style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined }}>
    <div className="MovieDetails__overlay">
      <div className="MovieDetails__details-container">
        {movie ? (
          <>
            <h1 className="MovieDetails__title">{movie.title}</h1>
            <div className="MovieDetails__meta">
              <span className="MovieDetails__meta-item">{formatDate(new Date(movie.release_date))}</span>
            </div>
            <div className="MovieDetails__meta">
              {genre && (
                <div className="MovieDetails__secondary MovieDetails__meta-item">
                  <span className="font-bold">Category: </span>
                  {genre.name}
                </div>
              )}
              {movie.runtime !== null ? (
                <div className="MovieDetails__secondary MovieDetails__meta-item">
                  <span className="font-bold">Length: </span>
                  {movie.runtime} min.
                </div>
              ) : null}
            </div>
            <p>{movie.overview}</p>
          </>
        ) : null}
      </div>
    </div>
  </div>
);

export default MovieDetailsView;

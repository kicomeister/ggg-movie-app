import React from "react";
import { IMovie } from "../../models/Movie";
import { Nullable } from "../../util";

import MovieDetails from "../../containers/MovieDetails";
import Loader from "../../components/Loader/LoaderView";

export interface IProps {
  movie: Nullable<IMovie>;
  isLoading: boolean;
}

const MovieView = ({ movie, isLoading }: IProps) => (isLoading ? <Loader /> : movie === null ? <span>error</span> : <MovieDetails movie={movie!} />);

export default MovieView;

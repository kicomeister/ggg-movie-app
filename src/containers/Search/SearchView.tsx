import React from "react";
import SearchInput from "./SearchInput";
import MovieCard from "../MovieCard";
import { IMovie } from "../../models/Movie";
import { Nullable } from "../../util";
// import { ReactComponent as Spinner } from "../../../spinner.jsx.svg";

import "./style.css";
import Heading from "../../components/Heading";

export interface IProps {
  onChange: (value: string) => void;
  value: string;
  isFetching: boolean;
  results: Nullable<IMovie[]>;
}

const SearchView = ({ onChange, value, isFetching, results }: IProps) => (
  <div className="Search">
    <div className="Search__input-container">
      <SearchInput onChange={onChange} value={value} placeholder="Search..." />
    </div>
    <div className="Search__results">
      <div className="Search__heading-container">{isFetching || results !== null ? <Heading>Search results</Heading> : null}</div>
      {isFetching ? <div>loading...</div> : null}
      {results ? results.map(movie => <MovieCard key={movie.id} movie={movie} />) : null}
    </div>
  </div>
);

export default SearchView;

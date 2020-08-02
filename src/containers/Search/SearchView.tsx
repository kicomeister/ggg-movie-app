import React from "react";
import SearchInput from "./SearchInput";
import MovieCard from "../MovieCard";
import { IAsset } from "../../models/Asset";
import { Nullable } from "../../util";

import "./style.css";
import Heading from "../../components/Heading";
import Loader from "../../components/Loader";
import Filter from "../Filter";

export interface IProps {
  onChange: (value: string) => void;
  value: string;
  isFetching: boolean;
  results: Nullable<IAsset[]>;
}

const SearchView = ({ onChange, value, isFetching, results }: IProps) => (
  <div className="Search">
    <div className="Search__input-container">
      <SearchInput onChange={onChange} value={value} placeholder="Search..." />
    </div>
    <div className="Search__results">
      <div className="Search__container">{isFetching || results !== null ? <Heading>Search results</Heading> : null}</div>
      <div className="Search__container">{results !== null && <Filter />}</div>
      {isFetching ? (
        <div>
          <Loader />
        </div>
      ) : null}
      {results ? results.map(movie => <MovieCard key={movie.id} asset={movie} />) : null}
    </div>
  </div>
);

export default SearchView;

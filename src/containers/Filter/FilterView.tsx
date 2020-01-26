import React from "react";
import classnames from "classnames";

import "./style.css";
import { IGenres } from "../../models/Genres";

export interface IProps {
  onFilter: (value: number) => void;
  optionsIds: number[];
  activeFilters: number[];
  options: IGenres;
}

const FilterView = ({ onFilter, options, optionsIds, activeFilters }: IProps) => (
  <div className="Filter">
    <p className="Filter__title">Filter: </p>
    {optionsIds.map(option => (
      <button key={option} onClick={() => onFilter(option)} className={classnames("Filter__button", { "Filter__button--active": activeFilters.includes(option) })}>
        {options[option]}
      </button>
    ))}
  </div>
);

export default FilterView;

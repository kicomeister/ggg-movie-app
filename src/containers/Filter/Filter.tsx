import React from "react";
import { observer } from "mobx-react";

import FilterView from "./FilterView";
import { useStore } from "../../store";

const Filter = () => {
  const store = useStore();
  return <FilterView onFilter={store.filter.setFilter} optionsIds={store.search.resultsGenreIds} activeFilters={store.filter.filters} options={store.genres.data || {}} />;
};

export default observer(Filter);

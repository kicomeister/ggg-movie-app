import { computed } from "mobx";
import uniq from "lodash/uniq";

import AsyncStore from "./AsyncStore";
import RootStore from "./RootStore";
import { IMovie } from "../models/Movie";
import ApiService from "../services/api";
import { Nullable } from "../util";
import FilterStore from "./FilterStore";

export default class SearchStore extends AsyncStore<IMovie[]> {
  private apiService: ApiService;

  private filterStore: FilterStore;

  constructor(rootStore: RootStore, apiService: ApiService) {
    super(rootStore);
    this.apiService = apiService;
    this.filterStore = rootStore.filter;
  }

  public async searchFor(query: string) {
    try {
      this.startFetching();
      const response = await this.apiService.search(query);
      this.handleSuccess(response.results);
    } catch (e) {
      console.log("SearchStore.searchFor", { e });
      this.handleError(e.message);
    }
  }

  @computed
  get filteredSearchResults(): Nullable<IMovie[]> {
    if (this.filterStore.filters.length && this.data) {
      return this.data.filter(movie => movie.genre_ids && movie.genre_ids.filter(genre => this.filterStore.filters.includes(genre)).length);
    }

    return this.data;
  }

  @computed
  get resultsGenreIds(): number[] {
    if (this.data) {
      const genresIds = this.data.reduce((acc: number[], movie) => {
        if (movie.genre_ids) {
          return [...acc, ...movie.genre_ids];
        }

        return acc;
      }, []);
      return uniq(genresIds);
    }

    return [];
  }
}

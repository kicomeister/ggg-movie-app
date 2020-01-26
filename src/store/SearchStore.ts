import { observable, action } from "mobx";

import AsyncStore from "./AsyncStore";
import RootStore from "./RootStore";
import { IMovie } from "../models/Movie";
import ApiService from "../services/api";
import { Nullable } from "../util";

export default class SearchStore extends AsyncStore<IMovie[]> {
  private apiService: ApiService;

  @observable
  freshMovies: Nullable<IMovie[]> = null;

  constructor(rootStore: RootStore, apiService: ApiService) {
    super(rootStore);
    this.apiService = apiService;
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

  @action.bound
  public async getFreshMovies(date: Date) {}
}

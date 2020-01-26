import RootStore from "./RootStore";
import { observable, action } from "mobx";
import { IMovies } from "../models/Movies";
import { Nullable } from "../util";
import ApiService from "../services/api/index";

export default class MoviesStore {
  private rootStore: RootStore;
  private apiService: ApiService;

  @observable
  public isFetching = false;
  @observable
  public error: Nullable<string> = null;

  @observable
  public movies: IMovies = {
    onCinema: [],
  };

  constructor(rootStore: RootStore, apiService: ApiService) {
    this.rootStore = rootStore;
    this.apiService = apiService;
  }

  @action.bound
  public async getFreshMovies(date?: Date) {
    try {
      this.isFetching = true;
      const response = await this.apiService.getFreshMovies(date);
      this.movies.onCinema = [...response.results];
      this.isFetching = false;
    } catch (e) {
      this.error = e.message;
      this.isFetching = false;
    }
  }
}

import RootStore from "./RootStore";
import { observable, action } from "mobx";
import { IMovies } from "../models/Movies";
import { Nullable } from "../util";
import ApiService from "../services/api/index";
import { Asset } from "../models/Asset";

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
    popular: [],
    popularSeries: [],
    genres: {},
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
      this.movies.onCinema = response.results.map(item => new Asset(item));
      this.isFetching = false;
    } catch (e) {
      this.error = e.message;
      this.isFetching = false;
    }
  }
  @action.bound
  public async getPopular(isSeries?: boolean) {
    try {
      const key = isSeries ? "popularSeries" : "popular";
      this.isFetching = true;
      const response = await this.apiService.getPopular(isSeries);
      this.movies[key] = response.results.map(item => new Asset(item));
      this.isFetching = false;
    } catch (e) {
      this.error = e.message;
      this.isFetching = false;
    }
  }

  @action.bound
  public async getByGenre(id: number) {
    try {
      this.isFetching = true;
      const response = await this.apiService.getByGenres([id]);
      this.movies.genres[id] = response.results.map(item => new Asset(item));
      this.isFetching = false;
    } catch (e) {
      this.error = e.message;
      this.isFetching = false;
    }
  }
}

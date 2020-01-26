import { observable } from "mobx";
import ApiService from "../services/api";
import AppStore from "./AppStore";
import SearchStore from "./SearchStore";
import MyMoviesStore from "./MyMoviesStore";
import MovieStore from "./MovieStore";
import GenresStore from "./GenresStore";
import FilterStore from "./FilterStore";

export default class RootStore {
  @observable
  private appStore: AppStore;
  private searchStore: SearchStore;
  private myMoviesStore: MyMoviesStore;
  private movieStore: MovieStore;
  private genresStore: GenresStore;
  private filterStore: FilterStore;

  constructor(apiService: ApiService) {
    this.appStore = new AppStore(this, apiService);
    this.myMoviesStore = new MyMoviesStore(this);
    this.movieStore = new MovieStore(this, apiService);
    this.genresStore = new GenresStore(this, apiService);
    this.filterStore = new FilterStore(this);
    this.searchStore = new SearchStore(this, apiService);
  }

  get app() {
    return this.appStore;
  }

  get search() {
    return this.searchStore;
  }

  get myMovies() {
    return this.myMoviesStore;
  }

  get movie() {
    return this.movieStore;
  }

  get genres() {
    return this.genresStore;
  }

  get filter() {
    return this.filterStore;
  }
}

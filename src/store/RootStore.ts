import { observable } from "mobx";
import ApiService from "../services/api";
import AppStore from "./AppStore";
import SearchStore from "./SearchStore";
import MyMoviesStore from "./MyMoviesStore";
import MovieStore from "./MovieStore";

export default class RootStore {
  @observable
  private appStore: AppStore;
  private searchStore: SearchStore;
  private myMoviesStore: MyMoviesStore;
  private movieStore: MovieStore;

  constructor(apiService: ApiService) {
    this.appStore = new AppStore(this, apiService);
    this.searchStore = new SearchStore(this, apiService);
    this.myMoviesStore = new MyMoviesStore(this);
    this.movieStore = new MovieStore(this, apiService);
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
}

import { observable } from "mobx";
import ApiService from "../services/api";
import AppStore from "./AppStore";
import SearchStore from "./SearchStore";
import MyMoviesStore from "./MyMoviesStore";

export default class RootStore {
  @observable
  private appStore: AppStore;
  private searchStore: SearchStore;
  private myMoviesStore: MyMoviesStore;

  constructor(apiService: ApiService) {
    this.appStore = new AppStore(this, apiService);
    this.searchStore = new SearchStore(this, apiService);
    this.myMoviesStore = new MyMoviesStore(this);
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
}

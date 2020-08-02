import RootStore from "./RootStore";
import { IAsset } from "../models/Asset";
import { observable, action, computed } from "mobx";

export default class MyMoviesStore {
  private rootStore: RootStore;

  @observable
  public data = [] as IAsset[];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public addMovie(movie: IAsset) {
    this.data = [...this.data, movie];
  }

  @action
  public removeMovie(movie: IAsset) {
    const index = this.data.findIndex(m => m.id === movie.id);
    if (index >= 0) {
      this.data.splice(index, 1);
    }
  }

  public contains(movie: IAsset) {
    const index = this.data.findIndex(m => m.id === movie.id);
    return index >= 0;
  }

  @computed
  get isEmpty() {
    return this.data.length === 0;
  }
}

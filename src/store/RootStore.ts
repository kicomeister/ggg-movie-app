import { observable } from "mobx";
import ApiService from "../services/api";
import AppStore from "./AppStore";

export default class RootStore {
  @observable
  private appStore: AppStore;

  constructor(apiService: ApiService) {
    this.appStore = new AppStore(this, apiService);
  }

  get app() {
    return this.appStore;
  }
}

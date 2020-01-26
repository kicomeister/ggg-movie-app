import RootStore from "./RootStore";
import { observable, action } from "mobx";

export default class FilterStore {
  private rootStore: RootStore;

  @observable
  public filters: number[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  public setFilter(id: number) {
    if (this.filters.includes(id)) {
      this.filters = this.filters.filter(item => item !== id);
    } else {
      this.filters = [...this.filters, id];
    }
  }
}

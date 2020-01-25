import { observable, action } from "mobx";

import RootStore from "./RootStore";
import { Nullable } from "../util";

export default class AsyncStore<T> {
  private rootStore: RootStore;

  @observable
  public isFetching = false;
  @observable
  public error: Nullable<string> = null;
  @observable
  public data: Nullable<T> = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  protected startFetching(resetData: Boolean = true) {
    this.isFetching = true;
    this.error = null;
    if (resetData) {
      this.data = null;
    }
  }

  @action.bound
  protected handleError(message: string) {
    this.error = message;
    this.isFetching = false;
  }

  @action.bound
  protected handleSuccess(results: T, saveResults: Boolean = true) {
    if (saveResults) {
      this.data = results;
    }
    this.isFetching = false;
    this.error = null;
  }
}

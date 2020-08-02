import AsyncStore from "./AsyncStore";
import RootStore from "./RootStore";
import { IAsset } from "../models/Asset";
import ApiService from "../services/api";

export default class AssetStore extends AsyncStore<IAsset> {
  private apiService: ApiService;

  constructor(rootStore: RootStore, apiService: ApiService) {
    super(rootStore);
    this.apiService = apiService;
  }

  public async fetchMovie(id: string) {
    try {
      this.startFetching();
      const response = await this.apiService.movie(id);
      this.handleSuccess(response);
    } catch (e) {
      console.log("SearchStore.searchFor", { e });
      this.handleError(e.message);
    }
  }

  public async fetchSeries(id: string) {
    try {
      this.startFetching();
      const response = await this.apiService.series(id);
      this.handleSuccess(response);
    } catch (e) {
      console.log("SearchStore.searchFor", { e });
      this.handleError(e.message);
    }
  }
}

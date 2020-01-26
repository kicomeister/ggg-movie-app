import AsyncStore from "./AsyncStore";
import RootStore from "./RootStore";
import { IMovie } from "../models/Movie";
import ApiService from "../services/api";

export default class MovieStore extends AsyncStore<IMovie> {
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
}

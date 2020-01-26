import AsyncStore from "./AsyncStore";
import RootStore from "./RootStore";
import ApiService from "../services/api";
import { IGenres } from "../models/Genres";

export default class GenresStore extends AsyncStore<IGenres> {
  private apiService: ApiService;

  constructor(rootStore: RootStore, apiService: ApiService) {
    super(rootStore);
    this.apiService = apiService;
  }

  public async getGenres() {
    try {
      this.startFetching();
      const response = await this.apiService.categories();
      const data = response.reduce((acc, genre) => {
        return { ...acc, [genre.id]: genre.name };
      }, {});
      this.handleSuccess(data);
    } catch (e) {
      console.log("SearchStore.getGenres", { e });
      this.handleError(e.message);
    }
  }
}

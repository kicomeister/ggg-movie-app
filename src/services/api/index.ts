import { IConfigureResult } from "../../models/ConfigureResult";
import { ISearchResult } from "../../models/SearchResult";

export default class ApiService {
  private static BASE_URL = process.env.REACT_APP_API_URL;
  private static API_KEY = process.env.REACT_APP_API_KEY;

  // https://developers.themoviedb.org/3/configuration/get-api-configuration
  async configure(): Promise<IConfigureResult> {
    try {
      const response = await fetch(`${ApiService.BASE_URL}/configuration?api_key=${ApiService.API_KEY}`);
      const result = await response.json();

      if (!response.ok) {
        throw Error(result.status_message);
      }
      return result;
    } catch (e) {
      console.error(e);
      throw Error("Failed to fetch configuration");
    }
  }

  // https://developers.themoviedb.org/3/search/search-movies
  async search(query: string, page: number = 1): Promise<ISearchResult> {
    try {
      const response = await fetch(`${ApiService.BASE_URL}/search/movie?api_key=${ApiService.API_KEY}&query=${query}&page=${page}`);
      const result = await response.json();

      if (!response.ok) {
        throw Error(result.status_message);
      }
      return result;
    } catch (e) {
      console.error(e);
      throw Error("Failed to fetch search results");
    }
  }
}

import { IConfigureResult } from "../../models/ConfigureResult";
import { ISearchResult } from "../../models/SearchResult";
import { IAsset, Asset } from "../../models/Asset";
import { IGenre } from "../../models/Genre";

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

  // https://developers.themoviedb.org/3/movies/get-movie-details
  async movie(id: string): Promise<IAsset> {
    try {
      const response = await fetch(`${ApiService.BASE_URL}/movie/${id}?api_key=${ApiService.API_KEY}`);
      const result = await response.json();

      if (!response.ok) {
        throw Error(result.status_message);
      }
      return new Asset(result);
    } catch (e) {
      console.error(e);
      throw Error("Failed to fetch movie");
    }
  }

  async series(id: string): Promise<IAsset> {
    try {
      const response = await fetch(`${ApiService.BASE_URL}/tv/${id}?api_key=${ApiService.API_KEY}`);
      const result = await response.json();

      if (!response.ok) {
        throw Error(result.status_message);
      }
      return new Asset(result);
    } catch (e) {
      console.error(e);
      throw Error("Failed to fetch series");
    }
  }

  // https://developers.themoviedb.org/3/movies/get-movie-details
  async categories(): Promise<IGenre[]> {
    try {
      const response = await fetch(`${ApiService.BASE_URL}/genre/movie/list?api_key=${ApiService.API_KEY}`);
      const result = await response.json();

      if (!response.ok) {
        throw Error(result.status_message);
      }
      return result.genres;
    } catch (e) {
      console.error(e);
      throw Error("Failed to fetch movie");
    }
  }

  // https://developers.themoviedb.org/3/discover/movie-discover
  async getFreshMovies(date: Date = new Date(), page: number = 1): Promise<ISearchResult> {
    try {
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date
        .getDate()
        .toString()
        .padStart(2, "0");
      const toDate = new Date(date);
      toDate.setDate(toDate.getDate() + 7);
      const toDay = toDate
        .getDate()
        .toString()
        .padStart(2, "0");
      const toMonth = (toDate.getMonth() + 1).toString().padStart(2, "0");

      const response = await fetch(
        `${ApiService.BASE_URL}/discover/movie?api_key=${
          ApiService.API_KEY
        }&primary_release_date.gte=${date.getFullYear()}-${month}-${day}&primary_release_date.lte=${toDate.getFullYear()}-${toMonth}-${toDay}&page=${page}`,
      );
      const result = await response.json();

      if (!response.ok) {
        throw Error(result.status_message);
      }
      return result;
    } catch (e) {
      console.error(e);
      throw Error("Failed to fetch fresh movies");
    }
  }

  async getPopular(isSeries?: boolean): Promise<ISearchResult> {
    try {
      const key = isSeries ? "tv" : "movie";
      const response = await fetch(`${ApiService.BASE_URL}/discover/${key}?sort_by=popularity.desc&api_key=${ApiService.API_KEY}`);
      const result = await response.json();

      if (!response.ok) {
        throw Error(result.status_message);
      }
      return result;
    } catch (e) {
      console.error(e);
      throw Error("Failed to fetch movie");
    }
  }

  async getByGenres(ids: number[]): Promise<ISearchResult> {
    try {
      const response = await fetch(`${ApiService.BASE_URL}/discover/movie?with_genres=${ids.join(",")}&api_key=${ApiService.API_KEY}`);
      const result = await response.json();

      if (!response.ok) {
        throw Error(result.status_message);
      }
      return result;
    } catch (e) {
      console.error(e);
      throw Error("Failed to fetch movie");
    }
  }
}

import { IConfigureResult } from "../../models/ConfigureResult";

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
}

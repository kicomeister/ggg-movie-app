import { IAsset } from "./Asset";

export interface IMovies {
  onCinema: IAsset[];
  popular: IAsset[];
  popularSeries: IAsset[];
  genres: {
    [key: string]: IAsset[];
  };
}

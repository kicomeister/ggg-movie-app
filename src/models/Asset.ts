import { Nullable } from "../util";
import { IGenre } from "./Genre";

export interface IAsset {
  poster_path: Nullable<string>;
  overview: string;
  release_date: string;
  genre_ids: number[];
  genres: IGenre[];
  id: number;
  title: string;
  backdrop_path: Nullable<string>;
  isSeries: boolean;
}

export class Asset implements IAsset {
  poster_path: Nullable<string>;
  overview: string;
  release_date: string;
  genre_ids: number[];
  genres: IGenre[];
  id: number;
  title: string;
  backdrop_path: Nullable<string>;
  isSeries: boolean;

  constructor({ poster_path, overview, release_date, genre_ids, genres, id, title, backdrop_path, name, first_air_date }: any) {
    this.poster_path = poster_path;
    this.overview = overview;
    this.release_date = first_air_date || release_date;
    this.genre_ids = genre_ids || [];
    this.genres = genres || [];
    this.id = id;
    this.title = name || title;
    this.backdrop_path = backdrop_path;
    this.isSeries = !!first_air_date;
  }
}

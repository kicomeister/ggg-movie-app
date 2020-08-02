import { Nullable } from "../util";

export interface ISeries {
  poster_path: Nullable<string>;
  overview: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  backdrop_path: Nullable<string>;
  popularity: number;
  vote_count: number;
  vote_average: number;
  first_air_date: string;
  name: string;
  origin_country: string;
  original_name: string;
}

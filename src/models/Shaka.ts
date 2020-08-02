import { Nullable } from "../util";

export interface IShaka {
  url: string;
  video: HTMLVideoElement;
  player: Nullable<any>;
  deInitialize(): void;
}

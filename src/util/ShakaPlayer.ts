import * as shaka from "shaka-player";

import { IShaka } from "../models/Shaka";
import { Nullable } from "./type";

export default class Shaka implements IShaka {
  url: string;
  video: HTMLVideoElement;
  player: Nullable<any>;

  constructor({ url, video }: { url: string; video: HTMLVideoElement }) {
    this.url = url;
    this.video = video;
    this.player = null;

    this.init();
  }

  private init = () => {
    shaka.polyfill.installAll();

    if (shaka.Player.isBrowserSupported()) {
      this.initPlayer();
    } else {
      this.onError(new Error("Browser not supported"));
    }
  };

  private initPlayer = async () => {
    const player = new shaka.Player(this.video);
    player.addEventListener("error", this.onError);

    try {
      await player.load(this.url);
    } catch (e) {
      this.onError(e);
    }
  };

  public deInitialize = () => {
    if (this.player) {
      this.player.removeEventListener("error");
    }

    this.player = null;
  };

  private onError = (e: Error) => window.alert(e.message);
}

import React, { useEffect, useRef } from "react";

import { IShaka } from "../../models/Shaka";
import Shaka from "../../util/ShakaPlayer";
import "./style.css";

interface IProps {
  url: string;
  poster?: string;
}

const Player = ({ url, poster }: IProps) => {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let shakaPlayer: IShaka;
    if (video && video.current) {
      shakaPlayer = new Shaka({ url, video: video.current });
    }

    return function cleanup() {
      if (shakaPlayer) {
        shakaPlayer.deInitialize();
      }
    };
  }, [url, video]);

  return (
    <div className="Player">
      <video ref={video} id="video" width="100%" height="100%" poster={poster} controls autoPlay></video>
    </div>
  );
};

export default Player;

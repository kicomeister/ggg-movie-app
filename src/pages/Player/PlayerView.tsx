import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import { Icon } from "@iconify/react";
import closeCircle from "@iconify/icons-jam/close-circle";

import { useStore } from "../../store";
import { Player } from "../../components";

import "./style.css";

// const STREAM = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const STREAM = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

interface IRouteParams {
  id: string;
  assetType: string;
}

const PlayerView = ({ match }: RouteComponentProps<IRouteParams>) => {
  const store = useStore();
  const [showClose, setShowClose] = useState(true);
  const history = useHistory();
  const { asset } = store;
  const { id, assetType } = match.params;

  useEffect(() => {
    if (assetType === "series") {
      asset.fetchSeries(id);
    } else {
      asset.fetchMovie(id);
    }
  }, [match.params, asset]);

  useEffect(() => {
    if (showClose) {
      window.setTimeout(() => setShowClose(false), 2000);
    }
  }, [showClose]);

  const poster = asset.data && asset.data.poster_path ? store.app.getImageUrl(asset.data.poster_path) : null;

  return (
    <div className="PlayerPage" onMouseMove={() => setShowClose(true)} onTouchStart={() => setShowClose(true)}>
      {showClose && (
        <div
          className="PlayerPage__close"
          onClick={() => {
            history.push(`/${assetType}/${id}`);
          }}
        >
          <Icon icon={closeCircle} />
        </div>
      )}
      <Player url={STREAM} poster={poster || ""} />
    </div>
  );
};

export default observer(PlayerView);

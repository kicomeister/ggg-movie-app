import React from "react";
import { observer } from "mobx-react";
import { IAsset } from "../../models/Asset";
import DetailsView from "./DetailsView";
import { useStore } from "../../store";

export interface IProps {
  asset: IAsset;
}

const Details = ({ asset }: IProps) => {
  const store = useStore();
  const backgroundImageUrl = asset.backdrop_path ? store.app.getImageUrl(asset.backdrop_path) : null;
  return <DetailsView asset={asset} backgroundImageUrl={backgroundImageUrl} />;
};

export default observer(Details);

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
  const imgUrl = asset.poster_path ? store.app.getImageUrl(asset.poster_path) : null;
  return <DetailsView asset={asset} imgUrl={imgUrl} />;
};

export default observer(Details);

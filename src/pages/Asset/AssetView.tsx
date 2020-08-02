import React from "react";
import { IAsset } from "../../models/Asset";
import { Nullable } from "../../util";

import Details from "../../containers/Details";
import Loader from "../../components/Loader/LoaderView";

export interface IProps {
  asset: Nullable<IAsset>;
  isLoading: boolean;
}

const AssetView = ({ asset, isLoading }: IProps) => (isLoading ? <Loader /> : asset === null ? <span>error</span> : <Details asset={asset!} />);

export default AssetView;

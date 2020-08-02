import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react";

import AssetView from "./AssetView";
import { useStore } from "../../store";

interface IRouteParams {
  id: string;
  assetType: string;
}

const Asset = ({ match }: RouteComponentProps<IRouteParams>) => {
  const store = useStore();

  useEffect(() => {
    const { id, assetType } = match.params;
    if (assetType === "series") {
      store.asset.fetchSeries(id);
    } else {
      store.asset.fetchMovie(id);
    }
  }, [match.params, store.asset]);

  return <AssetView asset={store.asset.data} isLoading={store.asset.isFetching} />;
};

export default observer(Asset);

import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react";

import AssetView from "./AssetView";
import { useStore } from "../../store";

interface IRouteParams {
  id: string;
  seriesId: string;
}

const Asset = ({ match }: RouteComponentProps<IRouteParams>) => {
  const store = useStore();

  useEffect(() => {
    const { id, seriesId } = match.params;
    if (seriesId) {
      store.asset.fetchSeries(seriesId);
    } else {
      store.asset.fetchMovie(id);
    }
  }, [match.params.id, store.asset]);

  return <AssetView asset={store.asset.data} isLoading={store.asset.isFetching} />;
};

export default observer(Asset);

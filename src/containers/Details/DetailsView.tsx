import React from "react";

import { IAsset } from "../../models/Asset";
import { Nullable, formatDate } from "../../util";

import "./style.css";
import { LinkButton } from "../../components";

export interface IProps {
  asset: IAsset;
  imgUrl: Nullable<string>;
}

const DetailsView = ({ asset, imgUrl }: IProps) => (
  <div className="Details">
    <div className="Details__overlay">
      <div className="Details__details-container">
        {asset ? (
          <>
            <h1 className="Details__title">{asset.title}</h1>
            <p>{asset.overview}</p>
            <div className="Details__meta">
              <span className="Details__meta-item">{formatDate(new Date(asset.release_date))}</span>
            </div>
            <div className="Details__meta">
              {asset.genres && (
                <div className="Details__secondary Details__meta-item">
                  <span className="font-bold">Categories: </span>
                  {asset.genres.map(({ name }) => name).join(", ")}
                </div>
              )}
            </div>
            <LinkButton to={`/player/${asset.isSeries ? "series" : "movie"}/${asset.id}`} caption="Play asset" />
          </>
        ) : null}
      </div>
      {imgUrl && (
        <div className="Details__image-container">
          <img className="Details__image" src={imgUrl} alt="" />
        </div>
      )}
    </div>
  </div>
);

export default DetailsView;

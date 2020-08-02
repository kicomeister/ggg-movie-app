import React from "react";

import { IAsset } from "../../models/Asset";
import { IGenres } from "../../models/Genres";
import { Nullable, formatDate } from "../../util";

import "./style.css";

export interface IProps {
  asset: IAsset;
  backgroundImageUrl: Nullable<string>;
}

const DetailsView = ({ asset, backgroundImageUrl }: IProps) => (
  <div className="Details" style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined }}>
    <div className="Details__overlay">
      <div className="Details__details-container">
        {asset ? (
          <>
            <h1 className="Details__title">{asset.title}</h1>
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
            <p>{asset.overview}</p>
          </>
        ) : null}
      </div>
    </div>
  </div>
);

export default DetailsView;

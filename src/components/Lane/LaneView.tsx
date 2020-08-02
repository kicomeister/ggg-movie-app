import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import arrowLeft from "@iconify/icons-jam/arrow-left";
import arrowRight from "@iconify/icons-jam/arrow-right";

import Heading from "../Heading";
import MovieCard from "../../containers/MovieCard";
import { IAsset } from "../../models/Asset";

import "./style.css";

export interface IProps {
  items: IAsset[];
  title: string;
}

const PrevArrow = (props: React.BaseHTMLAttributes<{}>) => (
  <div {...props}>
    <Icon icon={arrowLeft} />
  </div>
);
const NextArrow = (props: React.BaseHTMLAttributes<{}>) => (
  <div {...props}>
    <Icon icon={arrowRight} />
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: <PrevArrow />,
  prevArrow: <NextArrow />,
};

const LaneView = ({ items, title }: IProps) =>
  Array.isArray(items) && items.length ? (
    <div className="Lane">
      <Heading>{title}</Heading>
      <Slider className="Lane__results" {...settings}>
        {items.map(item => (
          <MovieCard key={item.id} asset={item} />
        ))}
      </Slider>
    </div>
  ) : null;

export default LaneView;

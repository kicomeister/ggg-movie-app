import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

interface IProps {
  to: string;
  caption: string;
}

const LinkButton = ({ to, caption }: IProps) => (
  <Link className="Button" to={to}>
    {caption}
  </Link>
);

export default LinkButton;

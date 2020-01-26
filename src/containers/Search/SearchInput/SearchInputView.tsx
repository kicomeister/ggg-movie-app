import React from "react";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-jam/search";

import "./style.css";

export interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const SearchInputView = ({ onChange, placeholder, value }: IProps) => (
  <div className="SearchInput">
    <Icon icon={searchIcon} />
    <input placeholder={placeholder} onChange={onChange} value={value} />
  </div>
);

export default SearchInputView;

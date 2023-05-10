import React from "react";
import classes from "./Search.module.css";
import searchIcon from "@assets/search.svg";
import { Input } from "@components/Input/Input";

interface Props {
  name: string;
  setName: (name: string) => void;
}

export const SearchUsers = ({ name, setName }: Props) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className={classes.search_input}>
      <label htmlFor="search">
        <img
          className={classes.search_icon}
          src={searchIcon}
          alt="search icon"
        />
      </label>
      <Input
        id="search"
        value={name}
        onChange={handleSearch}
        placeholder="Szukaj"
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
};

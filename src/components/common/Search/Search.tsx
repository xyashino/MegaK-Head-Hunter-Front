import React, {
  SyntheticEvent,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import classes from "./Search.module.css";
import searchIcon from "@assets/search.svg";
import { Input } from "@componentsCommon/Input/Input";
import { QueryContext } from "@context/QueryContext";
import { QueryAction } from "@enums/query-action.enum";

export const SearchUsers = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { dispatchQuery } = useContext(QueryContext);
  const handleSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchTerm((event.target as HTMLInputElement).value);
  };

  useLayoutEffect(() => {
    const intervalId = setTimeout(() => {
      dispatchQuery({
        type: QueryAction.UpdateName,
        payload: searchTerm.toLowerCase(),
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, [searchTerm]);

  return (
    <div className={classes.search_input}>
      <label htmlFor="search">
        <img
          className={classes.search_img}
          src={searchIcon}
          alt="search icon"
        />
      </label>
      <Input
        id="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Szukaj"
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
};

import React, { useState } from "react";
import classes from "./Search.module.css";
import searchIcon from "@assets/search.svg";
import { Input } from "@components/Input/Input";

type UserProps = {
  id: number;
  name: string;
  surname: string;
};

type SearchUsersProps = {
  users: UserProps[];
};

export const SearchUsers: React.FC<SearchUsersProps> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<UserProps[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = users.filter((user) => {
      const name = user.name.toLowerCase();
      const surname = user.surname.toLowerCase();
      return name.includes(searchTerm) || surname.includes(searchTerm);
    });
    setSearchTerm(searchTerm);
    setSearchResults(filteredUsers);
  };

  return (
    <>
      <div className={classes.search_input}>
        <label htmlFor="search">
          <img src={searchIcon} alt="search icon" />
        </label>
        <Input
          id="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Szukaj"
          style={{ backgroundColor: "transparent" }}
        />
      </div>

      <ul>
        {searchResults.map((user) => (
          <li key={user.id}>
            {user.name} ({user.surname})
          </li>
        ))}
      </ul>
    </>
  );
};

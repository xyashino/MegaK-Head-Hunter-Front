import React, { useLayoutEffect } from "react";
import classes from "./Panel.module.css";
import { BookmarkNavLink } from "@components/BookmarkNavLink/BookmarkNavLink";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import { UserResponse } from "@backendTypes";
import { toast } from "react-hot-toast";
import {BookmarkData} from "../../types/BookmarkData";

interface Props {
  accessRole: UserResponse["role"];
  bookmarks: BookmarkData[];
}

export const Panel = ({ accessRole, bookmarks }: Props) => {
  const { role, id } = useOutletContext() as {
    role: UserResponse["role"];
    id: string;
  };
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (role !== accessRole) {
      toast["error"]("Brak uprawnień");
      navigate(PageRouter.Main);
    }
  }, [role]);

  return (
    <>
      <div>
        <header className={classes.panel_header}>
          {bookmarks.map(({to,text},index) => (
            <BookmarkNavLink
              text={text}
              to={to}
              key={index}
            />
          ))}
        </header>
        <div className={classes.panel_main}>
          <Outlet context={{ role, id }} />
        </div>
      </div>
    </>
  );
};

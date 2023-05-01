import React, { useLayoutEffect } from "react";
import classes from "./AdminPanel.module.css";
import { BookmarkNavLink } from "@components/BookmarkNavLink/BookmarkNavLink";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import { UserResponse } from "@backendTypes";

export const AdminPanel = () => {
  const role = useOutletContext() as UserResponse["role"];
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (role !== "admin") navigate(PageRouter.Main);
  }, [role]);

  return (
    <>
      <div>
        <header className={classes.admin_panel_header}>
          <BookmarkNavLink
            text="Dodaj kursantów"
            to={PageRouter.AdminStudents}
          />
          <BookmarkNavLink
            text="Dodaj użytkowników HR"
            to={PageRouter.AdminHr}
          />
        </header>
        <div className={classes.admin_panel_main}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

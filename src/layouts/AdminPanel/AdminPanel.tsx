import React from "react";
import classes from "./AdminPanel.module.css";
import { BookmarkNavLink } from "@components/BookmarkNavLink/BookmarkNavLink";
import { Outlet } from "react-router-dom";

export const AdminPanel = () => {
  return (
    <>
      <div className={classes.div_admin_panel_wrapper}>
        <header className={classes.admin_panel_header}>
          <BookmarkNavLink text="Dodaj kursantów" to="/admin/students" />
          <BookmarkNavLink text="Dodaj użytkowników HR" to="/admin/hr" />
        </header>
        <div className={classes.admin_panel_main}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

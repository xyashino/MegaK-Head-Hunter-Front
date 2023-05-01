import React, {useLayoutEffect} from "react";
import classes from "./StudentPanel.module.css";
import { BookmarkNavLink } from "@components/BookmarkNavLink/BookmarkNavLink";
import {Outlet, useNavigate, useOutletContext} from "react-router-dom";
import {PageRouter} from "@enums/page-router.enum";
import {UserResponse} from "@backendTypes";

export const StudentPanel = () => {
  const role = useOutletContext() as UserResponse["role"];
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (role !== "student") navigate(PageRouter.Main);
  }, [role]);

  return (
    <>
      <div>
        <header className={classes.student_panel_header}>
          <BookmarkNavLink text="Panel" to={PageRouter.StudentPanel} />
          <BookmarkNavLink text="Edytuj CV" to={PageRouter.StudentEdit} />
        </header>
        <div className={classes.student_panel_main}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

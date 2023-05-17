import React from "react";
import classes from "./BookmarkNavLink.module.css";
import {NavLink, To } from "react-router-dom";

interface LinkToBookmarkProps {
  text?: string;
  to: To;
}

export const BookmarkNavLink = ({ text, to }: LinkToBookmarkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
       `${ isActive ? classes.active : classes.inactive} ${classes.nav_link}`
      }
      draggable={false}
    >
      {text}
    </NavLink>
  );
};

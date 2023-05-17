import React, { PropsWithChildren } from "react";
import classes from "./../Dropdown/Dropdown.module.css";
interface Props extends PropsWithChildren {
  title: string;
}

export const DropdownContentRow: React.FC<Props> = ({ title, children }) => (
  <div className={classes.dropdown_row}>
    <div className={classes.dropdown_row_title}>{title}</div>
    <div className={classes.dropdown_row_data}>{children}</div>
  </div>
);

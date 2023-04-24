import React, { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Button.module.css";

interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {}

export const Button = ({ className, style, children, ...rest }: Props) => {
  return (
    <button {...rest} className={classes.button}>
      {children}
    </button>
  );
};

import React, { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Button.module.css";

interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  customClasses?: string;
}

export const Button = ({
  className,
  style,
  children,
  customClasses = "",
  ...rest
}: Props) => {
  return (
    <button {...rest} className={`${classes.button} ${customClasses}`}>
      {children}
    </button>
  );
};

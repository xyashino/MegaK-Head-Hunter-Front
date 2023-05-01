import React, { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Button.module.css";

interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  customClasses?: string;
  status?: "active" | "disabled";
}

export const Button = ({
  className,
  children,
  customClasses = "",
  status = "active",
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`${classes.button} ${classes[status]} ${customClasses}`}
    >
      {children}
    </button>
  );
};

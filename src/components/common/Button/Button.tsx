import React, { HTMLAttributes, PropsWithChildren } from "react";
import Loading from "@assets/Loading.svg";
import classes from "./Button.module.css";
interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  customClasses?: string;
  status?: "active" | "disabled";
  loading?: boolean;
  name?: string;
}

export const Button = ({
  className,
  children,
  customClasses = "",
  status = "active",
  loading = false,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`${classes.button} ${classes[status]} ${customClasses}`}
    >
      <p className={ loading ? classes.loading_text : ''}>{children}</p>
      {loading ? (
        <img
          src={Loading}
          alt="Loading"
          draggable={false}
          className={classes.loading}
        />
      ) : null}
    </button>
  );
};

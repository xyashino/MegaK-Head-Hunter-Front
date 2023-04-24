import React, { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Input.module.css";

type InputType =
  | "email"
  | "password"
  | "text"
  | "number"
  | "date"
  | "checkbox"
  | "radio"
  | "file";

interface Props extends HTMLAttributes<HTMLInputElement>, PropsWithChildren {
  type?: InputType;
  isError?: boolean;
  message?: string;
  value:string;
}

export const Input = ({
  className,
  style,
  children,
  isError = false,
  message,
  ...rest
}: Props) => {

  return (
    <>
      <input className={`${classes.input} ${isError && classes.error}`} {...rest}/>
      {isError && <p className={classes.error_message}>{message}</p>}
    </>
  );
};

import React, { HTMLAttributes } from "react";
import classes from "./Input.module.css";
import { PreviewPassword } from "@components/Input/PreviewPassword";

export type InputType =
  | "email"
  | "password"
  | "text"
  | "number"
  | "date"
  | "checkbox"
  | "radio"
  | "file";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: InputType;
  isError?: boolean;
  message?: string;
  value: string;
  preview?: true;
  customClasses?: string;
}

export const Input = ({
  isError = false,
  message,
  preview,
  customClasses = "",
  ...rest
}: Props) => {
  if (preview) {
    return <PreviewPassword isError={isError} message={message} {...rest}  customClasses={customClasses}/>;
  }

  return (
    <>
      <input
        {...rest}
        className={`${classes.input} ${isError && classes.error} ${customClasses}`}
      />
      {isError && <p className={classes.error_message}>{message}</p>}
    </>
  );
};

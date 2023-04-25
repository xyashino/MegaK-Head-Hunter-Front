import React, { HTMLAttributes, PropsWithChildren, useState } from "react";
import classes from "./Input.module.css";
import {PreviewPassword} from "@components/Input/PreviewPassword";

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
}

export const Input = ({
  isError = false,
  message,
  preview,
  ...rest
}: Props) => {

  if (preview) {
    return (
        <PreviewPassword isError={isError} message={message} {...rest}/>
    );
  }

  return (
    <>
      <input
          {...rest}
          className={`${classes.input} ${isError && classes.error}`}
      />
      {isError && <p className={classes.error_message}>{message}</p>}
    </>
  );
};

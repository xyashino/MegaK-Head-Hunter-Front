import React, { HTMLAttributes, PropsWithChildren } from "react";
import "./Input.css";

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
      <input className={isError ? "error" : ""} {...rest} />
      {isError && <p className="error-message">{message}</p>}
    </>
  );
};

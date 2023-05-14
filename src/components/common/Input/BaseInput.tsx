import React, { PropsWithChildren } from "react";
import classes from "./Input.module.css";

interface Props extends PropsWithChildren {
  hasError?: boolean;
  errorMessage?: string;
  description?: string;
  messageType: "warning" | "error";
  className?: string;
}

export const BaseInput = ({
  hasError = false,
  errorMessage,
  description,
  children,
  messageType,
  className = "",
}: Props) => {
  const errorMessageClass =
    messageType === "error" ? classes.error_message : classes.warning_message;
  const messageClass = hasError ? errorMessageClass : "";
  return (
    <div className={`${classes.input_group} ${className}`}>
      {description && (
        <span className={classes.description}>{description}:</span>
      )}
      <div style={{ display: "flex" }}>{children}</div>
      {hasError && (
        <p className={`${classes.message} ${messageClass}`}>{errorMessage}</p>
      )}
    </div>
  );
};

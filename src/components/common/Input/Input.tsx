import React, {HTMLAttributes, PropsWithChildren} from "react";
import classes from "./Input.module.css";
import { PreviewPassword } from "@componentsCommon/Input/PreviewPassword";
import { BaseInput } from "@componentsCommon/Input/BaseInput";

export type InputType =
  | "email"
  | "password"
  | "text"
  | "number"
  | "date"
  | "checkbox"
  | "radio"
  | "file";

interface Props
  extends HTMLAttributes<HTMLInputElement>,
    PropsWithChildren {
  type?: InputType;
  name?: string;
  value: string;
  preview?: boolean;
  description?: string;
  hasError?: boolean;
  errorMessage?: string;
  messageType?: "warning" | "error";
  customClasses?: string;
}

export const Input = ({
  children,
  preview = false,
  description,
  hasError = false,
  errorMessage,
  messageType = "error",
  customClasses = "",
  ...rest
}: Props) => {
  return (
    <BaseInput
      description={description}
      hasError={hasError}
      errorMessage={errorMessage}
      messageType={messageType}
    >
      {preview ? (
        <PreviewPassword
          {...rest}
          customClasses={customClasses}
          isError={hasError}
          messageType={messageType}
        />
      ) : (
        <input
          {...rest}
          className={`${classes.input} ${customClasses} ${
            hasError && classes[messageType]
          }`}
        />
      )}
      {children}
    </BaseInput>
  );
};

import React, {
  HTMLAttributes,
  PropsWithChildren,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import classes from "./Input.module.css";
import preview from "@assets/preview/visibility.svg";
import offPreview from "@assets/preview/visibility_off.svg";
import { InputType } from "zlib";

interface Props extends HTMLAttributes<HTMLInputElement>, PropsWithChildren {
  type?: InputType;
  isError: boolean;
  message?: string;
  value: string;
}
export const PreviewPassword = ({
  className,
  isError,
  message,
  type,
  ...rest
}: Props) => {
  const inputRef = useRef(null);
  const [isPreview, setIsPreview] = useState(false);

  const handlePreview = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsPreview((prevState) => !prevState);
    if (inputRef.current) {
      const inputField = inputRef.current as HTMLInputElement;
      inputField.focus();
    }
  };
  return (
    <>
      <div className={classes.preview_password}>
        <input
          className={`${classes.input} ${isError && classes.error}`}
          type={isPreview ? "text" : "password"}
          {...rest}
          ref={inputRef}
        />

        <img
          src={isPreview ? preview : offPreview}
          alt={isPreview ? "preview icon" : "xxxxx"}
          className={classes.preview_password_icon}
          draggable={false}
          onClick={handlePreview}
        />
      </div>
      {isError && <p className={classes.error_message}>{message}</p>}
    </>
  );
};

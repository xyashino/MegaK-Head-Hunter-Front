import React, {
  HTMLAttributes,
  PropsWithChildren,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import classes from "./Input.module.css";
import previewIcon from "@assets/preview/visibility.svg";
import offPreviewIcon from "@assets/preview/visibility_off.svg";

export interface PreviewPasswordProps
  extends HTMLAttributes<HTMLInputElement>,
    PropsWithChildren {
  type?: string;
  isError: boolean;
  message?: string;
  value: string;
  customClasses: string;
  messageType: "warning" | "error";
}

export const PreviewPassword = ({
  isError,
  type,
  value,
  customClasses,
  messageType,
  ...rest
}: PreviewPasswordProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPreview, setIsPreview] = useState(false);

  const handlePreview = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsPreview((prevState) => !prevState);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
      <div className={classes.preview_password}>
        <input
          className={`${classes.input} ${
            isError && classes[messageType]
          } ${customClasses}`}
          type={isPreview ? "text" : "password"}
          value={value}
          {...rest}
          ref={inputRef}
        />
        <img
          src={isPreview ? previewIcon : offPreviewIcon}
          alt="preview icon"
          className={classes.preview_password_icon}
          draggable={false}
          onClick={handlePreview}
        />
      </div>
  );
};

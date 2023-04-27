import React, { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Text.module.css";

interface Props
  extends HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  customClasses?: string;
  weight?: "bold" | "normal" | "light";
  color?: "white" | "gray";
}

export const Text = ({
  className,
  children,
  customClasses = "",
  weight = "normal",
  color = "white",
  ...rest
}: Props) => {
  return (
    <>
      <p
        className={`${classes.p} ${customClasses} ${classes[weight]} ${classes[color]}`}
        {...rest}
      >
        {children}
      </p>
    </>
  );
};

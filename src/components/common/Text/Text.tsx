import React, { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Text.module.css";

interface Props
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'className'>,
    PropsWithChildren {
  customClasses?: string;
  weight?: "bold" | "normal" | "light";
  color?: "white" | "gray";
}

export const Text = ({
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

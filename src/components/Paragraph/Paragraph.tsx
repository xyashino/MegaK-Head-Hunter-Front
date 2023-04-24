import React, { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Paragraph.module.css";

interface Props
  extends HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {}

export const Paragraph = ({ className, children, ...rest }: Props) => {
  return (
    <>
      <p className={classes.p} {...rest}>{children}</p>
    </>
  );
};

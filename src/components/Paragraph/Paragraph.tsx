import React, { HTMLAttributes, PropsWithChildren } from "react";
import "./Paragraph.css";

interface Props
  extends HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {}

export const Paragraph = ({ className, style, children, ...rest }: Props) => {
  return (
    <>
      <p {...rest}>{children}</p>
    </>
  );
};

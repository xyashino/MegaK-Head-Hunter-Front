import React, { HTMLAttributes, PropsWithChildren } from "react";
import "./Button.css";

interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {}

export const Button = ({ className, style, children, ...rest }: Props) => {
  return (
    <button {...rest} className="">
      {children}
    </button>
  );
};

import React, { HTMLAttributes, PropsWithChildren } from "react";
import "./Input.css";

interface Props extends HTMLAttributes<HTMLInputElement>, PropsWithChildren {}

export const Input = ({ className, style, children, ...rest }: Props) => {
  return (
    <>
      <input {...rest} />
    </>
  );
};

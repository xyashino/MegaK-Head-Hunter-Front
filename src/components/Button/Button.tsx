import React, { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {}

export const Button = ({ className, style, children, ...rest }: Props) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

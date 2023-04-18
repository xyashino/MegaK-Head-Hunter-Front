import React, { HTMLAttributes } from "react";
import "./Button.scss"

type Props = HTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...rest }: Props) => {
  return <button {...rest} className=""></button>;
};

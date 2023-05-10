import React, { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./LinkWithIcon.module.css";

interface LinkProps extends HTMLAttributes<HTMLLinkElement>, PropsWithChildren {
  to: string;
  icon: string;
  text: string;
}

export const LinkWithIcon: React.FC<LinkProps> = ({
  to,
  icon,
  text,
  style,
}) => {
  return (
    <a href={to} className={`${classes.container_link}`} style={style} target="_blank" rel="noreferrer">
      <img className={`${classes.icon_link}`} src={icon}  alt='Url Icon'/>
      {text}
    </a>
  );
};

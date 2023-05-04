import React, { HTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
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
    <Link to={to} className={`${classes.container_link}`} style={style}>
      <img className={`${classes.icon_link}`} src={icon} />
      {text}
    </Link>
  );
};

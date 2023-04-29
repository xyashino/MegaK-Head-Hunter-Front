import React, { HTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@material-ui/core";
import { IconProps } from "@material-ui/core/Icon";
import classes from "./LinkWithIcon.module.css";

interface LinkProps extends HTMLAttributes<HTMLLinkElement>, PropsWithChildren {
  to: string;
  icon: IconProps["children"];
  text: string;
}

export const LinkWithIcon: React.FC<LinkProps> = ({
  to,
  icon,
  text,
  style,
}) => {
  return (
    <Link to={to} className={`${classes.container_link}`}>
      <Icon className={`${classes.icon_link}`}>{icon}</Icon>
      {text}
    </Link>
  );
};

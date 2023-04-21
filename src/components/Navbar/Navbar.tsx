import { Avatar } from "@components/Avatar/Avatar";
import { Logo } from "@components/Logo/Logo";
import { Paragraph } from "@components/Paragraph/Paragraph";
import React from "react";
import classes from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav>
      <div className={classes.nav_container}>
        <Logo />
        <div className={classes.nav_user}>
          <Avatar />
          <Paragraph></Paragraph>
        </div>
      </div>
    </nav>
  );
};

import { Avatar } from "@components/Avatar/Avatar";
import { Logo } from "@components/Logo/Logo";
import { Paragraph } from "@components/Paragraph/Paragraph";
import React from "react";
import classes from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav>
      <div className={classes.navbar_container}>
        <Logo />
        <div className={classes.navbar_user}>
          <Avatar />
          <Paragraph></Paragraph>
        </div>
      </div>
    </nav>
  );
};

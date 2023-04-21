import { Avatar } from "@components/Avatar/Avatar";
import { Logo } from "@components/Logo/Logo";
import { Paragraph } from "@components/Paragraph/Paragraph";
import React from "react";
import classes from "./Navbar.module.css";

const githubUsername = 'Ami777'; // to trzeba zastąpić githubUsername z BE/formularza FE
 

export const Navbar = () => {
  return (
    <nav>
      <div className={classes.nav_container}>
        <Logo />
        <div className={classes.nav_user}>
          <Avatar />
          <Paragraph>{githubUsername}</Paragraph>
          <span className="material-icons">arrow_drop_down</span>     
        </div>
      </div>
    </nav>
  );
};

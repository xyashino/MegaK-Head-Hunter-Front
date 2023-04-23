import { Avatar } from "@components/Avatar/Avatar";
import { Logo } from "@components/Logo/Logo";
import { Paragraph } from "@components/Paragraph/Paragraph";
import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const githubUsername = "Ami777"; // to trzeba zastąpić

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
      <div
        className={`${classes.nav_container} ${
          showMenu ? classes.showmenu : ""
        }`}
      >
        <Logo style={{ marginBottom: 0, justifyContent: "start", height: "55px" }} />
        <div className={classes.nav_user}>
          <button className={classes.info} onClick={toggleMenu}>
            <Avatar />
            <Paragraph
              style={{
                font: "normal normal normal 18px/30px Catamaran;",
                marginRight: "auto",
              }}
            >
              {githubUsername}
            </Paragraph>
            <span className="material-icons" style={{ color: "#9e9e9e" }}>
              arrow_drop_down
            </span>
          </button>
          <div
            className={`${classes.modal} ${showMenu ? classes.showmenu : ""}`}
          >
            <Link to="#">Konto</Link>
            <Link to="#">Wyloguj</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

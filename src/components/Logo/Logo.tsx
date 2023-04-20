import React from "react";
import classes from './Logo.module.css';
import img from "@assets/logo.png"

export const Logo = () => {
  return (
    <div className={classes.div_img_wrapper}>
      <img className={classes.img_logo} src={img} alt="Logo kursu MegaK" />
    </div>
  );
};

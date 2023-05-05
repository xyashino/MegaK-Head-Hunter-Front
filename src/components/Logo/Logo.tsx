import React, { HTMLAttributes } from "react";
import classes from "./Logo.module.css";
import img from "@assets/logo.png";

interface Props extends HTMLAttributes<HTMLImageElement> {
  customClasses?: string;
}

export const Logo = ({ customClasses = "", ...rest }: Props) => {
  return (
    <div className={`${classes.div_img_wrapper} ${customClasses}`} {...rest}>
      <img
        className={classes.img_logo}
        src={img}
        alt="Logo kursu MegaK"
        {...rest}
        draggable={false}
      />
    </div>
  );
};

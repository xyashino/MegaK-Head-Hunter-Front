import React, { HTMLAttributes } from "react";
import classes from "./Logo.module.css";
import img from "@assets/logo.png";

type Props = HTMLAttributes<HTMLImageElement>

export const Logo = ({ ...rest }: Props) => {
  return (
    <div className={classes.div_img_wrapper} {...rest}>
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

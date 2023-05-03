import React from "react";
import {Link} from "react-router-dom"
import classes from "./ErrorPage.module.css"
import img from "@assets/error-image.png"

type Props = {
  title: string,
  message: string,
  buttonMessage: string,
}

export const ErrorPage = ({title, message, buttonMessage}: Props) => {
  return <div className={classes.ErrorPage}>
    <div className={classes.title}><h2 className={classes.default}>{title}</h2></div>
    <hr />
    <p className={`${classes.message} ${classes.default}`}>{message}</p>
    <div className={classes.container}>
      <div className={classes.link}>
        <Link to='/'>{buttonMessage}</Link>
      </div>
      <div className={classes.image_container}>
        <img src={img} className={classes.image} alt="error"/>
      </div>
    </div>
  </div>
}
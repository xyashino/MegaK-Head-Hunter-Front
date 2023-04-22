import React from "react";
import {Link} from "react-router-dom"
import classes from "./ErrorPage.module.css"
import img from "@assets/error-image.png"

type Props = {
  title: string,
  message: string,
}

export const ErrorPage = ({title, message}: Props) => {
  return <div className={classes.ErrorPage}>
    <div className={classes.title}><h2>{title}</h2></div>
    <hr />
    <p className={classes.message}>{message}</p>
    <div className={classes.container}>
      <div className={classes.link}>
        <Link to='/' className={classes.backLink}>back to main site</Link>
      </div>
      <div className={classes.imageContainer}>
        <img src={img} alt="error image"/>
      </div>
    </div>
  </div>
}
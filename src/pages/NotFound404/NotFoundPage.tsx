import React from "react";
import {Link} from "react-router-dom"
import classes from "./NotFoundPage.module.css"

type Props = {
  message: string,
}

export const NotFoundPage = ({message}: Props) => {
  return <div className={classes.container}>
    <p className={classes.message}>{message}</p>
      <div className={classes.link}>
        <Link to='/'>Back to main side</Link>
      </div>
  </div>
}
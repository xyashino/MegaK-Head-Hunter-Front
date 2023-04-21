import React from "react";
import {Link} from "react-router-dom"
import classes from "./NotFound404.module.css"

type Props = {
  message: string,
}

export const NotFound404 = (props: Props) => {
  return <div className={classes.notFound404}>
    <p className={classes.message}>{props.message}</p>
      <div className={classes.link}>
        <Link to='/'>Back to main side</Link>
      </div>
  </div>
}
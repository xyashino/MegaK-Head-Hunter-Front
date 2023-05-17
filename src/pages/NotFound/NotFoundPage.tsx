import React from "react";
import {Link} from "react-router-dom"
import classes from "./NotFoundPage.module.css"
import {PageRouter} from "@enums/page-router.enum";

type Props = {
  message: string,
}

export const NotFoundPage = ({message}: Props) => {
  return <div className={classes.container}>
    <p className={classes.message}>{message}</p>
      <div className={classes.link}>
        <Link to={PageRouter.Main}>Powrót do strony głównej</Link>
      </div>
  </div>
}
import React from "react";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import classes from "./LoginInPage.module.css";

export const LoginInPage = () => {
  return (
    <div className={classes.login_in_container}>
      <Paragraph style={{fontSize:'72px'}}>Zalogowano!!</Paragraph>
    </div>
  );
};

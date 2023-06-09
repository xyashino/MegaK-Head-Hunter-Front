import React, { ReactNode } from "react";
import classes from "./ExpectationContainer.module.css";

interface ExpectationContainerProps {
  title: string;
  expectation: string | ReactNode | ReactNode[];
}

export const ExpectationContainer = ({
  title,
  expectation,
}: ExpectationContainerProps) => {
  return (
    <div className={classes.rate_container}>
      <span className={classes.expectations_title}>{title}</span>
      <div className={classes.rating}>
        <div className={classes.figure}>
          <span className={classes.rate_bold}>{expectation}</span>
        </div>
      </div>
    </div>
  );
};

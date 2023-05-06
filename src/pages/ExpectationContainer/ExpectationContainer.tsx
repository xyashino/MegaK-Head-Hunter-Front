import React from "react";
import classes from "./RatingContainer.module.css";

interface ExpectationContainerProps {
  title: string;
  expectation: string;
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

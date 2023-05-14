import React from "react";
import classes from "./RatingInStars.module.css";
import {Star} from "@components/RatingInStars/Star";

interface RatingInStarsProps {
  numberOfStars: number;
}

export const RatingInStars = ({ numberOfStars }: RatingInStarsProps) => {
  return (
    <span className={classes.stars}>
      {[...Array(5)].map((star, i) => (
        <span key={i}>
          <Star color={i + 1 >= numberOfStars ? "grey" : "#e02635"} fontSize={'24px'}/>
        </span>
      ))}
    </span>
  );
};

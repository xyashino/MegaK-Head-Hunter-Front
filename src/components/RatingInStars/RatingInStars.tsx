import { FaStar } from "react-icons/fa";
import classes from "./RatingInStars.module.css";

interface RatingInStarsProps {
  numberOfStars: number;
}

const GREY_COLOR = "gray";
const RED_COLOR = "#e02635";

export const RatingInStars = ({ numberOfStars }: RatingInStarsProps) => {
  return (
    <span className={classes.stars}>
      {[...Array(5)].map((star, i) => {
        return (
          <span key={i}>
            <FaStar color={i + 1 >= numberOfStars ? GREY_COLOR : RED_COLOR} />
          </span>
        );
      })}
    </span>
  );
};

import {FaStar} from "react-icons/fa";
import classes from "./RatingInStars.module.css";

interface RatingInStarsProps {
    numberOfStars: number;
}

export const RatingInStars = ({numberOfStars}: RatingInStarsProps) => {
    return (
        <span className={classes.stars}>
            {[...Array(5)].map((star, i) => {
                const value = i + 1;
                return (
                    <span key={i}>
                        <FaStar color={value >= numberOfStars ? "grey" : "#e02635"}/>
                    </span>
                )
            })}
        </span>
    )
};

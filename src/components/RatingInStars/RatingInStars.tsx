import {FaStar} from "react-icons/fa";
import classes from "./RatingInStars.module.css";

interface ratingInStarsProps {
    numberOfStars: number;
}

export const RatingInStars = ({numberOfStars}: ratingInStarsProps) => {
    return (
        <span className={classes.stars}>
            {[...Array(5)].map((star, i) => {
                const value = i + 1;
                return <FaStar
                    color={value >= numberOfStars ? "grey" : "#e02635"}
                />
            })}
        </span>
    )
};

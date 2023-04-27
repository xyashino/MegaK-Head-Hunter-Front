import classes from "./ShowRating.module.css";
import {RatingInStars} from "@components/RatingInStars/RatingInStars"

interface ratingProps {
    paragraphText: string,
    degree: number,
    isStars: boolean
}

export const ShowRating = ({paragraphText, degree, isStars}: ratingProps) => {
    return (
        <div className={classes.rating}>
            <p>{paragraphText}</p>
            <p>
                <span className={classes.degree}>{degree}</span> /5
                {isStars && (
                    <RatingInStars numberOfStars={degree + 1}/>
                )}
            </p>
        </div>
    );
};

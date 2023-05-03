import classes from "./ShowRating.module.css";
import {RatingInStars} from "@components/RatingInStars/RatingInStars"

interface RatingProps {
    paragraphText: string,
    degree: number,
    isStars: boolean
}

export const ShowRating = ({paragraphText, degree, isStars}: RatingProps) => {
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

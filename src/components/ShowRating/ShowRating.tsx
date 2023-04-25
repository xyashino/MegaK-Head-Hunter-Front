import classes from "./ShowRating.module.css";

type ratingProps = {
    className: string,
    paragraphText: string,
    degree: number,
}

export const ShowRating = ({paragraphText, degree}: ratingProps) => {
    return (
        <div className={classes.rating}>
            <p>{paragraphText}</p>
            <p><span className={classes.degree}>{degree}</span> /5</p>
        </div>
    );
};

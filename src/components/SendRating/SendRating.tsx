import {FaStar} from "react-icons/fa";
import {Paragraph} from "@components/Paragraph/Paragraph";
import classes from "./SendRating.module.css";

interface sendRatingProps {
    whatIsAssessed: string,
}

export const SendRating = ({whatIsAssessed}: sendRatingProps) => {
    return (
        <div className={classes.one_rating_area}>
            <Paragraph>{whatIsAssessed}</Paragraph>
            <p className={classes.degrees_field}>
                {[...Array(5)].map((star, i) => {
                    let value = i + 1;
                    return (
                        <span className={classes.one_degree}>{value}<FaStar className={classes.star}
                                                                            color="#e02635"/></span>
                    )
                }).reverse()}
            </p>
        </div>
    );
};
import { FaStar } from "react-icons/fa";
import classes from "./SendRating.module.css";
import { IconContext } from "react-icons";
import {RatingCategory} from "@constants/rating";
export interface SendRatingProps extends RatingCategory {
    onRatingClick: (name: string, starIdx: number) => void;
}

export const SendRating = ({ name, label, state, onRatingClick }: SendRatingProps) => {
    return (
        <div className={classes.one_rating_area}>
            <p>{label}</p>

            <p className={classes.degrees_field}>
                {state.map((singleStarState, idx) => (
                    <button
                        key={`rating-button-${idx}`}
                        onClick={() => onRatingClick(name, idx)}
                        className={classes.one_degree}
                    >
                        {idx + 1}

                        <IconContext.Provider
                            value={{
                                className: state[idx].isActive
                                    ? classes.react_icons_star_active
                                    : classes.react_icons_star
                            }}
                        >
                            <FaStar />
                        </IconContext.Provider>
                    </button>
                ))}
            </p>
        </div>
    );
};
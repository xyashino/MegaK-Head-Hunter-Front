import { FaStar } from "react-icons/fa";
import { Paragraph } from "@components/Paragraph/Paragraph";
import classes from "./SendRating.module.css";
import { IconContext } from "react-icons";
import { useState } from "react";

interface SendRatingProps {
    whatIsAssessed: string;
}

interface StarState {
    isActive: boolean;
}

interface RatingCategory {
    name: string;
    state: StarState[];
}

export const SendRating = ({ whatIsAssessed }: SendRatingProps) => {
    const initialRatingCategories = [
        { name: "course", state: [...Array(5)].map(() => ({ isActive: false })) },
        { name: "engagement", state: [...Array(5)].map(() => ({ isActive: false })) },
        { name: "project", state: [...Array(5)].map(() => ({ isActive: false })) },
        { name: "scrum", state: [...Array(5)].map(() => ({ isActive: false })) },
    ];

    const [ratingCategories, setRatingCategories] = useState<RatingCategory[]>(initialRatingCategories);

    const handleStarClick = (index: number, ratingType: string) => {
        const newCategories = ratingCategories.map((category) => {
            if (category.name === ratingType) {
                return {
                    ...category,
                    state: category.state.map((star, i) => ({
                        isActive: i === index ? !star.isActive : star.isActive,
                    })),
                };
            } else {
                return category;
            }
        });
        setRatingCategories(newCategories);
    };

    const resetRatingCategories = () => {
        const newCategories = ratingCategories.map((category) => ({
            ...category,
            state: category.state.map(() => ({ isActive: false })),
        }));
        setRatingCategories(newCategories);
    };

    return (
        <div className={classes.one_rating_area}>
            <Paragraph>{whatIsAssessed}</Paragraph>
            <p className={classes.degrees_field}>
                {[...Array(5)].map((_, index) => {
                    const categoryIndex = Math.floor(index / 5);
                    const category = ratingCategories[categoryIndex];
                    const value = index % 5 + 1;
                    return (
                        <button
                            key={`button-${index}`}
                            onClick={() => handleStarClick(index % 5, category.name)}
                            className={classes.one_degree}
                        >
                            {value}
                            <IconContext.Provider
                                value={{
                                    className: category?.state[index % 5].isActive
                                        ? classes.react_icons_star_active
                                        : classes.react_icons_star,
                                }}
                            >
                                <FaStar />
                            </IconContext.Provider>
                        </button>
                    );
                })}
            </p>
        </div>
    );
};
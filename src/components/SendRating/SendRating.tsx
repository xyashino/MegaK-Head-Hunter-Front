import {FaStar} from "react-icons/fa";
import {Paragraph} from "@components/Paragraph/Paragraph";
import classes from "./SendRating.module.css";
import {IconContext} from "react-icons/lib";
import {useEffect, useState} from "react";

interface SendRatingProps {
    whatIsAssessed: string,
}

type initState = {
    [index: number]: boolean
}

const getInitialState = (): initState => {
    const buttonClicked = localStorage.getItem('buttonClicked');
    return buttonClicked ? JSON.parse(buttonClicked) : {};
}

export const SendRating = ({whatIsAssessed}: SendRatingProps) => {
    const [buttonClicked, setButtonClicked] = useState<initState>(getInitialState);

    useEffect(() => {
        localStorage.setItem('buttonClicked', JSON.stringify(buttonClicked));
    }, [buttonClicked]);

    const handleClick = (index: number) => () => {
        setButtonClicked(state => ({
            ...state,
            [index]: !state[index]
        }));
    };

    return (
        <div className={classes.one_rating_area}>
            <Paragraph>{whatIsAssessed}</Paragraph>
            <p className={classes.degrees_field}>
                {[...Array(5)].map((star, i) => {
                    let value = i + 1;
                    return (
                        <IconContext.Provider value={{className: classes.react_icons_star}} key={i}>
                            <button className={buttonClicked[i] ? classes.rating_button_clicked : classes.rating_button}
                                    onClick={handleClick(i)}>
                                <span className={classes.rating_value}>{value}</span>
                                <FaStar className={buttonClicked[i] ? classes.star_clicked : classes.star}/>
                            </button>
                        </IconContext.Provider>
                    )
                }).reverse()}
            </p>
        </div>
    );
};
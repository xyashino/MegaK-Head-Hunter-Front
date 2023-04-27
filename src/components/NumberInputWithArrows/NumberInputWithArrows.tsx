import React from "react";
import classes from "./NumberInputWithArrows.module.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export type NumberInputWithArrowsProps = {
    value: number;
    setValue: (value: number) => void;
    min?: number;
    max?: number;
};

export const NumberInputWithArrows = ({ value, setValue, min, max }: NumberInputWithArrowsProps) => {
    const handleIncrement = () => {
        if (max === undefined || value < max) {
            setValue(value + 1);
        }
    };

    const handleDecrement = () => {
        if (min === undefined || value > min) {
            setValue(value - 1);
        }
    };

    return (
        <div className={classes.div_input_number_wrapper}>
            <input
                type="number"
                value={value}
                readOnly
                className={classes.number_input}
            />
            <div className={classes.arrows_wrapper}>
            <button
                className={classes.arrow}
                onClick={handleIncrement}
                aria-label="increase">
                <ArrowDropUpIcon style={{fontSize: "50px"}}/>
            </button>
            <button
                className={classes.arrow}
                onClick={handleDecrement}
                aria-label="decrease">
                <ArrowDropDownIcon style={{fontSize: "50px"}} />
            </button>
            </div>
        </div>
    );
};
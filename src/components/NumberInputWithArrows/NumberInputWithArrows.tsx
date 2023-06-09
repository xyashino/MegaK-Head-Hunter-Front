import React from "react";
import classes from "./NumberInputWithArrows.module.css";

export type NumberInputWithArrowsProps = {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  monthsOfExperience: number;
};

export const NumberInputWithArrows = ({
  value,
  setValue,
  min,
  max,
  monthsOfExperience,
}: NumberInputWithArrowsProps) => {
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

  const getMonthWord = (value: number): string => {
    switch (value) {
      case 0:
        return "miesięcy";
      case 1:
        return "miesiąc";
      case 2:
      case 3:
      case 4:
        return "miesiące";
      default:
        return "miesięcy";
    }
  };

  const renderLabel = (value: number): string => {
    const monthWord = getMonthWord(value);
    return `${monthWord}`;
  };

  return (
    <div className={classes.div_input_number_wrapper}>
      <input
        id="number"
        type="number"
        value={value}
        readOnly
        className={classes.number_input}
      />
      <label htmlFor="number" className={classes.number_input_label}>
        {renderLabel(monthsOfExperience)}
      </label>
      <div className={classes.arrows_wrapper}>
        <button
          className={classes.arrow}
          onClick={handleIncrement}
          aria-label="increase"
        >
          <span
            className="material-icons-outlined"
            style={{ fontSize: "41px" }}
          >
            arrow_drop_up
          </span>
        </button>
        <button
          className={classes.arrow}
          onClick={handleDecrement}
          aria-label="decrease"
        >
          <span
            className="material-icons-outlined"
            style={{ fontSize: "41px" }}
          >
            arrow_drop_down
          </span>
        </button>
      </div>
    </div>
  );
};

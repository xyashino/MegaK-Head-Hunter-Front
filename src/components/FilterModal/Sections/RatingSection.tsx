import React, { SyntheticEvent, useContext } from "react";
import { Input } from "@components/Input/Input";
import classes from "./Section.module.css";
import { FilterContext } from "@context/FilterContext";
import { FilterAction } from "@enums/filter-action.enum";
import { Rating } from "@enums/rating.enum";

export const RatingSection = () => {
  const {
    filter: { rating },
    dispatchFilter,
  } = useContext(FilterContext);
  const handleInputChange = (e: SyntheticEvent, name: Rating) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    if (value === "")
      return dispatchFilter({
        type: FilterAction.UpdateRating,
        payload: { name, value: null },
      });
    const numberValue = Number(value);
    if (numberValue < 1 || numberValue > 5) return;
    dispatchFilter({
      type: FilterAction.UpdateRating,
      payload: { name, value: numberValue },
    });
  };

  return (
    <>
      {rating.map(({ label, name, value }, index) => (
        <div key={index}>
          <label htmlFor={`rating-${index}`}>{label}</label>
          <Input
            type="number"
            customClasses={classes.input_rating}
            value={`${value ?? ""}`}
            onChange={(e) => handleInputChange(e, name)}
            placeholder="Wpisz minimalną ocenę w zakresie od 1 do 5"
            id={`rating-${index}`}
          />
        </div>
      ))}
    </>
  );
};

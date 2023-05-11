import classes from "@components/FilterModal/FilterModal.module.css";
import React, { SyntheticEvent, useContext } from "react";
import { FilterContext } from "@context/FilterContext";
import { FilterAction } from "@enums/filter-action.enum";
import { Input } from "@components/Input/Input";

export const MonthSection = () => {
  const {
    filter: { monthOfExperience },
    dispatchFilter,
  } = useContext(FilterContext);

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value } = e.target as HTMLInputElement;
    if (value === "" || value === "0")
      return dispatchFilter({ type: FilterAction.UpdateMonth, payload: null });
    const numberValue = Number(value);
    if (numberValue < 0 || numberValue > 100) return;
    dispatchFilter({ type: FilterAction.UpdateMonth, payload: numberValue });
  };

  return (
    <div>
      <p>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</p>
      <div className={classes.input_months}>
        <Input
          value={`${monthOfExperience ?? ""}`}
          type="number"
          onChange={handleChange}
          placeholder="0 miesięcy"
        />
      </div>
    </div>
  );
};

import classes from "@components/FilterModal/FilterModal.module.css";
import React, { SyntheticEvent, useContext } from "react";
import { FilterContext } from "@context/FilterContext";
import { FilterAction } from "@enums/filter-action.enum";
import { ExpectedTypeWorkEnum } from "@backendTypes";
import { ActiveValue } from "../../../types/FilterData";

export const WorkSection = () => {
  const {
    filter: { typeWork },
    dispatchFilter,
  } = useContext(FilterContext);

  const handleClick = (
    e: SyntheticEvent,
    payload: ActiveValue<ExpectedTypeWorkEnum>
  ) => {
    e.preventDefault();
    dispatchFilter({ type: FilterAction.UpdateTypeWork, payload });
  };

  return (
    <div>
      <p>Preferowane miejsce pracy</p>
      <div>
        {typeWork.map(({ value, isActive }, index) => (
          <button
            className={`${classes.btn_filter_modal_smaller} ${
              isActive ? classes.btn_filter_modal_smaller_active : ""
            }`}
            onClick={(e) => handleClick(e, { isActive: !isActive, value })}
            key={value + index}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

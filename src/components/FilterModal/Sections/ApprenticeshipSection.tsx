import classes from "@components/FilterModal/FilterModal.module.css";
import React, { useContext } from "react";
import { FilterContext } from "@context/FilterContext";
import { FilterAction } from "@enums/filter-action.enum";

export const ApprenticeshipSection = () => {
  const {
    filter: { canTakeApprenticeship },
    dispatchFilter,
  } = useContext(FilterContext);

  const handleClick = (payload: boolean) => {
    dispatchFilter({ type: FilterAction.UpdateApprenticeship, payload: canTakeApprenticeship === payload ? null : payload});
  };

  return (
    <div>
      <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
      <div>
        <p className={classes.input_radio_wrapper}>
          <input
            className={classes.input_radio}
            type="radio"
            id="yes"
            name="option"
            value="Tak"
            checked={canTakeApprenticeship ?? false}
            onChange={() => handleClick(true)}
          />
          <label htmlFor="yes">Tak</label>
        </p>
        <p>
          <input
            className={classes.input_radio}
            type="radio"
            id="no"
            name="option"
            value="Nie"
            checked={
              canTakeApprenticeship === null ? false : !canTakeApprenticeship
            }
            onChange={() => handleClick(false)}
          />
          <label htmlFor="no">Nie</label>
        </p>
      </div>
    </div>
  );
};

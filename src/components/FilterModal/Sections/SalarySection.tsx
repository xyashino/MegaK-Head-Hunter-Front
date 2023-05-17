import classes from "@components/FilterModal/FilterModal.module.css";
import React, {SyntheticEvent, useContext, useLayoutEffect, useState} from "react";
import {FilterContext} from "@context/FilterContext";
import {FilterAction} from "@enums/filter-action.enum";

export const SalarySection = () => {
  const {filter,dispatchFilter} = useContext(FilterContext);
  const [salary,setSalary]= useState(filter.salary)
  const handleInputChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setSalary((prevState) => ({ ...prevState, [name]: value }));
  };

  useLayoutEffect(() => {
    dispatchFilter({type:FilterAction.UpdateSalary, payload:salary})
  }, [salary]);

  return (
      <div>
        <p>Oczekiwane wynagrodzenie miesięczne netto</p>
        <div className={classes.input_filter_modal_smaller}>
          <label htmlFor="minSalary">Od</label>
          <input
              id="minSalary"
              placeholder="np. 1000 zł"
              value={`${salary.min}`}
              name="min"
              onChange={handleInputChange}
          />
          <label htmlFor="maxSalary">Do</label>
          <input
              id="maxSalary"
              placeholder="np. 10000 zł"
              value={`${salary.max}`}
              name="max"
              onChange={handleInputChange}
          />
        </div>
      </div>
  );
};

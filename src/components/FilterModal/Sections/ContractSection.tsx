import classes from "@components/FilterModal/FilterModal.module.css";
import React, {SyntheticEvent, useContext} from "react";
import {FilterContext} from "@context/FilterContext";
import {FilterAction} from "@enums/filter-action.enum";
import {ExpectedContractTypeEnum} from "@backendTypes";
import {ActiveValue} from "../../../types/FilterData";

export const ContractSection = () => {
  const {filter:{contract},dispatchFilter} = useContext(FilterContext);

  const handleClick = (e:SyntheticEvent, payload:ActiveValue<ExpectedContractTypeEnum>) =>{
    e.preventDefault();
    dispatchFilter({type:FilterAction.UpdateContract,payload})
  }

  return (
      <div>
        <p>Oczekiwany typ kontraktu</p>
        <div>
          {contract.map(({ value, isActive },index) => (
            <button
              className={`${classes.btn_filter_modal_smaller} ${isActive ? classes.btn_filter_modal_smaller_active : ""}`}
              onClick={(e)=>handleClick(e, {isActive:!isActive, value})}
              key={value + index}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
  );
};

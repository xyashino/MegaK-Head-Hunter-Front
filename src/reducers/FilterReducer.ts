import { FilterData } from "../types/FilterData";
import { FilterActionData } from "../types/FilterActionData";
import { FilterAction } from "@enums/filter-action.enum";
import {DEFAULT_FILTER_DATA} from "@constants/DefaultFilterData";

type Reducer = (state: FilterData, action: FilterActionData) => FilterData;
export const filterReducer: Reducer = (state, action) => {
  const { type, payload } = action;
  const copyState: FilterData = { ...state };

  switch (type) {
    case FilterAction.UpdateSalary:
      if (!payload) return state;
      copyState.salary = payload;
      return copyState;

    case FilterAction.UpdateApprenticeship:
      copyState.canTakeApprenticeship = payload;
      return copyState;

    case FilterAction.UpdateTypeWork:
      const foundWorkIndex = copyState.typeWork.findIndex(
        (el) => el.value === payload.value
      );
      if (foundWorkIndex === -1) return state;
      copyState.typeWork[foundWorkIndex].isActive = payload.isActive;
      return copyState;


    case FilterAction.UpdateContract:
      const foundContractIndex = copyState.contract.findIndex(
        (el) => el.value === payload.value
      );
      if (foundContractIndex === -1) return state;
      copyState.contract[foundContractIndex].isActive = payload.isActive;
      return copyState;

    case FilterAction.UpdateRating:
      const foundRatingIndex = copyState.rating.findIndex(
        (el) => el.name === payload.name
      );
      if (foundRatingIndex === -1) return state;
      copyState.rating[foundRatingIndex].value = payload.value;
      return copyState;

    case FilterAction.UpdateMonth:
      copyState.monthOfExperience = payload;
      return copyState;

    case FilterAction.ResetAll:
      copyState.monthOfExperience = null;
      copyState.canTakeApprenticeship = null;
      copyState.rating.forEach((el) => (el.value = null));
      copyState.contract.forEach((el) => (el.isActive = false));
      copyState.typeWork.forEach((el) => (el.isActive = false));
      copyState.salary.min = "";
      copyState.salary.max = "";
      return DEFAULT_FILTER_DATA;
    case FilterAction.UpdateAll:
      console.log("payload", payload)
      return {...payload};
  }
};

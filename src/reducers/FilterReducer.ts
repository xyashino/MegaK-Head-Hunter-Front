import { FilterData } from "../types/FilterData";
import { FilterActionData } from "../types/FilterActionData";
import { FilterAction } from "@enums/filter-action.enum";
import { DEFAULT_FILTER_DATA } from "@constants/DefaultFilterData";

type Reducer = (state: FilterData, action: FilterActionData) => FilterData;

export const filterReducer: Reducer = (state: FilterData, action: FilterActionData) => {
  const { type, payload } = action;
  const copiedState: FilterData = { ...state };
  let foundIndex = -1
  switch (type) {
    case FilterAction.UpdateSalary:
      if (!payload) return state;
      copiedState.salary = payload;
      return copiedState;

    case FilterAction.UpdateApprenticeship:
      copiedState.canTakeApprenticeship = payload;
      return copiedState;

    case FilterAction.UpdateTypeWork:
      foundIndex = copiedState.typeWork.findIndex(
          (el) => el.value === payload.value
      );
      if (foundIndex === -1) return state;
      copiedState.typeWork[foundIndex].isActive = payload.isActive;
      return copiedState;

    case FilterAction.UpdateContract:
      foundIndex = copiedState.contract.findIndex(
          (el) => el.value === payload.value
      );
      if (foundIndex === -1) return state;
      copiedState.contract[foundIndex].isActive = payload.isActive;
      return copiedState;

    case FilterAction.UpdateRating:
       foundIndex = copiedState.rating.findIndex(
          (el) => el.name === payload.name
      );
      if (foundIndex === -1) return state;
      copiedState.rating[foundIndex].value = payload.value;
      return copiedState;

    case FilterAction.UpdateMonth:
      copiedState.monthOfExperience = payload;
      return copiedState;

    case FilterAction.ResetAll:
      copiedState.monthOfExperience = null;
      copiedState.canTakeApprenticeship = null;
      copiedState.rating.forEach((el) => (el.value = null));
      copiedState.contract.forEach((el) => (el.isActive = false));
      copiedState.typeWork.forEach((el) => (el.isActive = false));
      copiedState.salary.min = "";
      copiedState.salary.max = "";
      return DEFAULT_FILTER_DATA;

    case FilterAction.UpdateAll:
      return { ...payload };

    default:
      return state;
  }
};

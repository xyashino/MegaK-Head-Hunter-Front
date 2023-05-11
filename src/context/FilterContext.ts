import { createContext, Dispatch } from "react";
import { FilterData } from "../types/FilterData";
import { DEFAULT_FILTER_DATA } from "@constants/DefaultFilterData";
import { FilterActionData } from "../types/FilterActionData";
interface FilterContextValue {
  filter: FilterData;
  dispatchFilter: Dispatch<FilterActionData>;
}

const initialValue: FilterContextValue = {
  filter: DEFAULT_FILTER_DATA,
  dispatchFilter: () => {},
};

export const FilterContext = createContext<FilterContextValue>(initialValue);

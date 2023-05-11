import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import { FilterData } from "../types/FilterData";
import { DEFAULT_FILTER_DATA } from "@constants/DefaultFilterData";
import { FilterActionData } from "../types/FilterActionData";
import { filterReducer } from "@reducers/FilterReducer";
interface FilterContextValue {
  filter: FilterData;
  dispatchFilter: Dispatch<FilterActionData>;
}

const initialValue: FilterContextValue = {
  filter: DEFAULT_FILTER_DATA,
  dispatchFilter: () => {},
};

export const FilterContext = createContext<FilterContextValue>(initialValue);

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [filter, dispatchFilter] = useReducer(
    filterReducer,
    DEFAULT_FILTER_DATA
  );
  return (
    <FilterContext.Provider value={{ filter, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

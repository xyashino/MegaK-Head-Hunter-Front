import { createContext, Dispatch } from "react";
import { QueryData } from "../types/QueryData";
import { QueryActionData } from "../types/QueryActionData";
import { DEFAULT_QUERY_FILTERS } from "@constants/DefaultQueruFilters";

interface QueryContextValue {
  queryData: QueryData;
  dispatchQuery: Dispatch<QueryActionData>;
}

const initialValue: QueryContextValue = {
  queryData: {
    url: "",
    name: "",
    filtration: DEFAULT_QUERY_FILTERS,
    pagination: {
      hasNextPage: false,
      hasPreviousPage: false,
      page: 1,
      itemCount: 10,
      take: 10,
      pageCount: 1,
    },
    refresh:false,
  },
  dispatchQuery: () => {},
};

export const QueryContext = createContext<QueryContextValue>(initialValue);

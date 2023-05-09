import { createContext, Dispatch } from "react";
import { QueryData } from "../types/QueryData";
import {QueryActionData} from "../types/QueryActionData";

interface QueryContextValue {
  queryData: QueryData;
  dispatchQuery: Dispatch<QueryActionData>;
}

const initialValue: QueryContextValue = {
  queryData: {
    url: "",
    pagination: {
      hasNextPage: false,
      hasPreviousPage: false,
      page: 1,
      itemCount: 10,
      take: 10,
      pageCount: 1,
    },
  },
  dispatchQuery: () => {},
};

export const QueryContext =
  createContext<QueryContextValue>(initialValue);

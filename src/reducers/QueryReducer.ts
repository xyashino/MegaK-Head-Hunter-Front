import { QueryData } from "../types/QueryData";
import { QueryActionData } from "../types/QueryActionData";
import { QueryAction } from "@enums/query-action.enum";
import {PageMeta} from "@backendTypes";
import {buildQueryUrl} from "@utils/buildQuery";
type Reducer = (state: QueryData, action: QueryActionData) => QueryData;

const updatePageAndFlags = (pagination:PageMeta, newPage:number) => {
  pagination.page = newPage;
  pagination.hasPreviousPage = pagination.page !== 1;
  pagination.hasNextPage = pagination.page < pagination.pageCount;
};

export const queryReducer: Reducer = (state, action) => {
  const copyState = { ...state };

  switch (action.type) {
    case QueryAction.PaginationPrevStep:
      if (!state.pagination.hasPreviousPage) return state;
      updatePageAndFlags(copyState.pagination, state.pagination.page - 1);
      copyState.url = buildQueryUrl(copyState.url, {
        take: copyState.pagination.take,
        page: copyState.pagination.page,
      });
      return copyState;

    case QueryAction.PaginationNextStep:
      if (!state.pagination.hasNextPage) return state;
      updatePageAndFlags(copyState.pagination, state.pagination.page + 1);
      copyState.url = buildQueryUrl(copyState.url, {
        take: copyState.pagination.take,
        page: copyState.pagination.page,
      });
      return copyState;

    case QueryAction.PaginationChangeTake:
      copyState.pagination.take = Number(action.payload);
      copyState.url = buildQueryUrl(copyState.url, {
        take: copyState.pagination.take,
        page: 1,
      });
      return copyState;

    case QueryAction.PaginationUpdate:
      copyState.pagination = action.payload;
      return copyState;

    default:
      return state;
  }
};
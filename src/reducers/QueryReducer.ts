import { QueryData } from "../types/QueryData";
import { QueryActionData } from "../types/QueryActionData";
import { QueryAction } from "@enums/query-action.enum";
import { PageMeta } from "@backendTypes";
import { buildQueryUrl } from "@utils/buildQuery";

type Reducer = (state: QueryData, action: QueryActionData) => QueryData;

const updatePageAndFlags = (pagination: PageMeta, newPage: number) => {
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
    case QueryAction.UpdateName:
      copyState.name = action.payload;
      copyState.pagination.page = 1;
      copyState.url = buildQueryUrl(copyState.url, { name: copyState.name });
      return copyState;
    case QueryAction.FilterStudent:
      copyState.filtration = action.payload;
      copyState.pagination.page = 1;
      copyState.url = buildQueryUrl(copyState.url, {
        courseCompletion: copyState.filtration.courseCompletion ?? "",
        courseEngagement: copyState.filtration.courseEngagement ?? "",
        projectDegree: copyState.filtration.projectDegree ?? "",
        teamProjectDegree: copyState.filtration.teamProjectDegree ?? "",
        expectedTypeWork: copyState.filtration.expectedTypeWork ?? "",
        expectedContractType: copyState.filtration.expectedContractType ?? "",
        minSalary: copyState.filtration.minSalary,
        maxSalary: copyState.filtration.maxSalary,
        canTakeApprenticeship: copyState.filtration.canTakeApprenticeship,
        monthsOfCommercialExp: copyState.filtration.monthsOfCommercialExp,
      });
      return copyState;
    default:
      return state;
  }
};

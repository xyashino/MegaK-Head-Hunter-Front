import {QueryAction} from "@enums/query-action.enum";
import {Filtration, PageMeta} from "@backendTypes";

export type QueryActionData =   {
    type: QueryAction.PaginationPrevStep | QueryAction.PaginationNextStep | QueryAction.Refresh;
} | {
    type: QueryAction.PaginationChangeTake;
    payload: number;
} | {
    type: QueryAction.PaginationUpdate;
    payload: PageMeta;
} | {
  type: QueryAction.UpdateName;
  payload: string;
} | {
  type: QueryAction.FilterStudent;
  payload: Filtration;
}

import {QueryAction} from "@enums/query-action.enum";

export interface QueryActionData {
  type: QueryAction;
  payload?: any;
}

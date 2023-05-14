import React, {
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { QueryContext } from "@context/QueryContext";
import { QueryAction } from "@enums/query-action.enum";
import classes from "./QueryMenagment.module.css";
import { queryReducer } from "@reducers/QueryReducer";
import { RequestPath } from "@enums/request-path.enum";
import { AxiosSetup } from "@utils/network/AxiosSetup";
import {
  InterviewFindResponse,
  ManyStudentResponse,
  PageMeta,
} from "@backendTypes";
import { toast } from "react-hot-toast";
import { Paginator } from "@components/Paginator/Paginator";
import { DEFAULT_QUERY_FILTERS } from "@constants/DefaultQueruFilters";
import { FilterContext } from "@context/FilterContext";
import { FilterAction } from "@enums/filter-action.enum";

interface Props extends PropsWithChildren {
  request: RequestPath;
  meta: PageMeta;
  updateStudents: <T extends ManyStudentResponse | InterviewFindResponse>(
    e: T["data"]
  ) => void;
}
export const QueryManagement = ({
  children,
  request,
  meta,
  updateStudents,
}: Props) => {
  const { dispatchFilter } = useContext(FilterContext);

  const [queryData, dispatchQuery] = useReducer(queryReducer, {
    url: import.meta.env.VITE_API_URL + request,
    name: "",
    filtration: DEFAULT_QUERY_FILTERS,
    pagination: meta,
    refresh: false,
  });

  useLayoutEffect(() => {
    dispatchFilter({
      type: FilterAction.ResetAll,
      payload: undefined,
    });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  useLayoutEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    (async () => {
      try {
        const { meta, data } = (
          await AxiosSetup.get<ManyStudentResponse | InterviewFindResponse>(queryData.url)
        ).data;
        updateStudents(data);
        dispatchQuery({ type: QueryAction.PaginationUpdate, payload: meta });
      } catch (e: any) {
        toast.error(
          e.response?.data.message ?? e.response?.data.error ?? e.message
        );
      } finally {
        setIsLoading(false);
      }
    })();
  }, [queryData.url,queryData.refresh]);

  return (
    <QueryContext.Provider value={{ queryData, dispatchQuery }}>
      <div className={classes.query_management}>
        <div className={classes.query_children}>{children}</div>
        <Paginator />
      </div>
    </QueryContext.Provider>
  );
};

import {
  PropsWithChildren,
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
  ActiveStudentResponse,
  ManyStudentResponse,
  PageMeta,
} from "@backendTypes";
import { toast } from "react-hot-toast";
import { Paginator } from "@components/Paginator/Paginator";

interface Props extends PropsWithChildren {
  baseStudents: ActiveStudentResponse[];
  request: RequestPath;
  meta: PageMeta;
  updateStudents: (students: ActiveStudentResponse[]) => void;
}

const filters = {
  courseCompletion: "4",
  courseEngagement: "",
  projectDegree: "",
  teamProjectDegree: "",
  expectedTypeWork: "",
  expectedContractType: "",
  minSalary: "",
  maxSalary: "",
  canTakeApprenticeship: "",
  monthsOfCommercialExp: "",
};

export const QueryManagement = ({
  children,
  request,
  meta,
  updateStudents,
}: Props) => {
  const [queryData, dispatchQuery] = useReducer(queryReducer, {
    url: import.meta.env.VITE_API_URL + request,
    name: "",
    filtration: filters,
    pagination: meta,
  });
  const [isLoading, setIsLoading] = useState(false);
  console.log(queryData);
  useLayoutEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    (async () => {
      try {
        const { meta, data } = (
          await AxiosSetup.get<ManyStudentResponse>(queryData.url)
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
  }, [queryData.url]);

  return (
    <QueryContext.Provider value={{ queryData, dispatchQuery }}>
      <div className={classes.query_management}>
        <div className={classes.query_children}>{children}</div>
        <Paginator />
      </div>
    </QueryContext.Provider>
  );
};

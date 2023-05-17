import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ManyStudentResponse, ActiveStudentResponse } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { SearchUsers } from "@componentsCommon/Search/Search";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { FilterContextProvider } from "@context/FilterContext";
import classes from "./StudentsPage.module.css";

export const StudentsPage = () => {
  const { meta, data: activeStudents } = useLoaderData() as ManyStudentResponse;
  const [students, setStudents] =
    useState<ActiveStudentResponse[]>(activeStudents);

  const updateStudents = (e: ActiveStudentResponse[]) => {
    setStudents(e);
  };

  return (
    <FilterContextProvider>
      <QueryManagement
        meta={meta}
        request={RequestPath.GetStudents}
        updateStudents={updateStudents as any}
      >
        <div className={classes.search_bar}>
          <SearchUsers />
          <div className={classes.div_btn_to_modal_wrapper}>
            <FilterModal />
          </div>
        </div>
        {students.map(({ id, firstname, lastname, ...rest }) => (
          <Dropdown
            key={id}
            userName={`${firstname} ${lastname?.charAt(0) + "."}`}
            id={id}
            studentData={{
              canTakeApprenticeship: rest.canTakeApprenticeship,
              monthsOfCommercialExp: rest.monthsOfCommercialExp,
              expectedContractType: rest.expectedContractType,
              teamProjectDegree: rest.teamProjectDegree,
              expectedSalary: rest.expectedSalary,
              targetWorkCity: rest.targetWorkCity,
              courseEngagement: rest.courseEngagement,
              courseCompletion: rest.courseCompletion,
              expectedTypeWork: rest.expectedTypeWork,
              projectDegree: rest.projectDegree,
            }}
          />
        ))}
      </QueryManagement>
    </FilterContextProvider>
  );
};

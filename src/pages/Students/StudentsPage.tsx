import { useLoaderData } from "react-router-dom";
import { ManyStudentResponse, ActiveStudentResponse } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { Dropdown } from "@components/Dropdown/Dropdown";
import React, { useState } from "react";
import { SearchUsers } from "@components/Search/Search";
import classes from "./StudentsPage.module.css";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { Text } from "@components/Text/Text";
import { FilterContextProvider } from "@context/FilterContext";
import { CreateInterviewButton } from "@components/CreateInterviewButton/CreateInterviewButton";

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
        baseStudents={activeStudents}
        meta={meta}
        request={RequestPath.GetStudents}
        updateStudents={updateStudents}
      >
        <div className={classes.search_bar}>
          <SearchUsers />
          <div className={classes.div_btn_to_modal_wrapper}>
            <FilterModal />
          </div>
        </div>
        {students.map((el: ActiveStudentResponse) => (
          <Dropdown
            key={el.id}
            userNameData={
              <Text>
                {el.firstname} {el.lastname ? el.lastname.charAt(0) + "." : ""}
              </Text>
            }
            courseAssessment={el.courseCompletion}
            courseEngagement={el.courseEngagement}
            projectDegree={el.projectDegree}
            teamProjectDegree={el.teamProjectDegree}
            expectedTypeWork={el.expectedTypeWork}
            expectedContractType={el.expectedContractType}
            expectedSalary={el.expectedSalary}
            canTakeApprenticeship={el.canTakeApprenticeship}
            monthsOfCommercialExp={el.monthsOfCommercialExp}
            targetWorkCity={el.targetWorkCity}
            firstOptionalBtn={<CreateInterviewButton id={el.id} />}
          />
        ))}
      </QueryManagement>
    </FilterContextProvider>
  );
};

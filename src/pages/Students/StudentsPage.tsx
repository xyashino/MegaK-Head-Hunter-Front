import { useLoaderData } from "react-router-dom";
import { ManyStudentResponse, ActiveStudentResponse } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { SearchUsers } from "@componentsCommon/Search/Search";
import classes from "./StudentsPage.module.css";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { FilterContextProvider } from "@context/FilterContext";
import { Button } from "@componentsCommon/Button/Button";
import { Text } from "@componentsCommon/Text/Text";
import { useState } from "react";
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
        {students.map(({ id, firstname, lastname, ...rest }) => (
          <Dropdown
            key={id}
            userNameData={
              <Text>
                {firstname} {lastname?.charAt(0) + "."}
              </Text>
            }
            firstOptionalBtn={<Button>Zarezerwuj rozmowę</Button>}
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

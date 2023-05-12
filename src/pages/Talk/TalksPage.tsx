import { useLoaderData, useNavigate } from "react-router-dom";
import { ActiveStudentResponse, PageMeta } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import React, { useState } from "react";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { SearchUsers } from "@componentsCommon/Search/Search";
import classes from "@pages/Students/StudentsPage.module.css";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { FilterContextProvider } from "@context/FilterContext";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { Button } from "@componentsCommon/Button/Button";
import { PageRouter } from "@enums/page-router.enum";
import { HiredButton } from "@components/HiredButton/HiredButton";
import { RemoveInterviewButton } from "@components/RemoveInterviewButton/RemoveInterviewButton";

export const TalksPage = () => {
  const { data: activeStudents, meta } = useLoaderData() as {
    data: ActiveStudentResponse[];
    meta: PageMeta;
  };
  const [students, setStudents] = useState(activeStudents);
  const navigate = useNavigate();

  return (
    <FilterContextProvider>
      <QueryManagement
        baseStudents={students}
        meta={meta}
        request={RequestPath.GetInterview}
        updateStudents={(e: ActiveStudentResponse[]) => {
          setStudents(e);
        }}
      >
        <div className={classes.search_bar}>
          <SearchUsers />
          <div className={classes.div_btn_to_modal_wrapper}>
            <FilterModal />
          </div>
        </div>
        {students.map((el) => (
          <Dropdown
            key={el.id}
            githubUsername={el.githubUsername}
            userName={`${el.firstname} ${el.lastname?.charAt(0) + "."}`}
            firstOptionalBtn={
              <Button onClick={() => navigate(`${PageRouter.GetCv}${el.id}`)}>
                Pokaż CV
              </Button>
            }
            secondOptionalBtn={<RemoveInterviewButton id={el.id} />}
            thirdOptionalBtn={<HiredButton id={el.id} />}
            studentData={{
              courseCompletion: el.courseCompletion,
              courseEngagement: el.courseEngagement,
              projectDegree: el.projectDegree,
              teamProjectDegree: el.teamProjectDegree,
              expectedTypeWork: el.expectedTypeWork,
              expectedContractType: el.expectedContractType,
              expectedSalary: el.expectedSalary,
              canTakeApprenticeship: el.canTakeApprenticeship,
              monthsOfCommercialExp: el.monthsOfCommercialExp,
              targetWorkCity: el.targetWorkCity,
            }}
          />
        ))}
      </QueryManagement>
    </FilterContextProvider>
  );
};

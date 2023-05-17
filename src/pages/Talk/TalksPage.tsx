import { useLoaderData } from "react-router-dom";
import {
  InterviewFindResponse,
  InterviewRelationResponse,
} from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import React, { useState } from "react";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { SearchUsers } from "@componentsCommon/Search/Search";
import classes from "@pages/Students/StudentsPage.module.css";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { FilterContextProvider } from "@context/FilterContext";
import { Dropdown } from "@components/Dropdown/Dropdown";

export const TalksPage = () => {
  const { data: interviewResponse, meta } =
    useLoaderData() as InterviewFindResponse;
  const [interview, setInterview] = useState(interviewResponse);

  const updateTalks = (e:unknown) => {
    setInterview(e as  InterviewRelationResponse[]);
  };

  return (
    <FilterContextProvider>
      <QueryManagement
        meta={meta}
        request={RequestPath.GetInterview}
        update={updateTalks}
      >
        <div className={classes.search_bar}>
          <SearchUsers />
          <div className={classes.div_btn_to_modal_wrapper}>
            <FilterModal />
          </div>
        </div>
        {interview.map(({ student: el }) => (
          <Dropdown
            key={el.id}
            githubUsername={el.githubUsername}
            userName={`${el.firstname} ${el.lastname?.charAt(0) + "."}`}
            isTalks
            id={el.id}
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

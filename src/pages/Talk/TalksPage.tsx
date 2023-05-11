import { useLoaderData, useNavigate } from "react-router-dom";
import { ActiveStudentResponse, PageMeta } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import React, { useState } from "react";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { SearchUsers } from "@components/Search/Search";
import classes from "@pages/Students/StudentsPage.module.css";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { FilterContextProvider } from "@context/FilterContext";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { Avatar } from "@components/Avatar/Avatar";
import { Button } from "@components/Button/Button";
import { PageRouter } from "@enums/page-router.enum";
import { HiredButton } from "@components/HiredButton/HiredButton";
import { RemoveInterviewButton } from "@components/RemoveInterviewButton/RemoveInterviewButton";
import { Text } from "@components/Text/Text";

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
            key={el.student.id}
            reservationData={
              <Text>
                Rezerwacja do <br />
                {new Date(el.bookingDate).toLocaleDateString()}
              </Text>
            }
            userNameAvatarData={
              <Avatar githubUsername={el.student.githubUsername} />
            }
            userNameData={
              <Text>
                {el.student.firstname} {el.student.lastname}
              </Text>
            }
            firstOptionalBtn={
              <Button
                onClick={() => navigate(`${PageRouter.GetCv}${el.student.id}`)}
              >
                Pokaż CV
              </Button>
            }
            secondOptionalBtn={<RemoveInterviewButton id={el.student.id} />}
            thirdOptionalBtn={<HiredButton id={el.student.id} />}
            courseAssessment={el.student.courseCompletion}
            courseEngagement={el.student.courseEngagement}
            projectDegree={el.student.projectDegree}
            teamProjectDegree={el.student.teamProjectDegree}
            expectedTypeWork={el.student.expectedTypeWork}
            expectedContractType={el.student.expectedContractType}
            expectedSalary={el.student.expectedSalary}
            canTakeApprenticeship={el.student.canTakeApprenticeship}
            monthsOfCommercialExp={el.student.monthsOfCommercialExp}
            targetWorkCity={el.student.targetWorkCity}
          />
        ))}
      </QueryManagement>
    </FilterContextProvider>
  );
};

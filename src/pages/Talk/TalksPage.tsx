import { useLoaderData } from "react-router-dom";
import {
  ActiveStudentResponse,
  ManyStudentResponse,
  PageMeta,
} from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import React, { useState } from "react";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { SearchUsers } from "@components/Search/Search";
import classes from "@pages/Students/StudentsPage.module.css";
import { Button } from "@components/Button/Button";
import { Text } from "@components/Text/Text";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { Avatar } from "@components/Avatar/Avatar";
import { RemoveInterviewButton } from "@components/RemoveInterviewButton/RemoveInterviewButton";
import { HiredButton } from "@components/HiredButton/HiredButton";

export const TalksPage = () => {
  const { data: activeStudents, meta } = useLoaderData() as {
    data: ActiveStudentResponse[];
    meta: PageMeta;
  };
  const [students, setStudents] = useState(activeStudents);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState<boolean>(false);

  const openFilterModal = () => {
    setFilterModalIsOpen(true);
  };

  const closeFilterModal = () => {
    setFilterModalIsOpen(false);
  };

  return (
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
          <Button
            customClasses={classes.btn_to_modal}
            onClick={openFilterModal}
          >
            <span
              className="material-icons-outlined"
              style={{
                fontSize: "1.5rem",
                verticalAlign: "-6px",
                color: "#4D4D4D",
                backgroundColor: "",
              }}
            >
              filter_alt
            </span>
            Filtrowanie
          </Button>
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
          children={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum ipsum labore maxime natus nemo nostrum omnis quod ratione voluptate? Eum impedit ipsam obcaecati placeat quisquam rerum saepe sit. Debitis?"
          }
          firstOptionalBtn={<Button>Pokaż CV</Button>}
          secondOptionalBtn={<RemoveInterviewButton id={el.student.id} />}
          thirdOptionalBtn={<HiredButton id={el.student.id} />}
        />
      ))}
      <FilterModal
        isOpen={filterModalIsOpen}
        onRequestClose={closeFilterModal}
        onCancel={closeFilterModal}
      />
    </QueryManagement>
  );
};

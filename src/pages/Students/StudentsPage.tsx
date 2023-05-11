import { useLoaderData } from "react-router-dom";
import { ActiveStudentResponse, ManyStudentResponse } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { Dropdown } from "@components/Dropdown/Dropdown";
import React, { useState } from "react";
import { SearchUsers } from "@components/Search/Search";
import classes from "./StudentsPage.module.css";
import { Button } from "@components/Button/Button";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { Text } from "@components/Text/Text";
import { CreateInterviewButton } from "@components/CreateInterviewButton/CreateInterviewButton";

export const StudentsPage = () => {
  const { meta, data: activeStudents } = useLoaderData() as ManyStudentResponse;
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
      baseStudents={activeStudents}
      meta={meta}
      request={RequestPath.GetStudents}
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
          key={el.id}
          userNameData={
            <Text>
              {el.firstname} {el.lastname.charAt(0) + "."}
            </Text>
          }
          children={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum ipsum labore maxime natus nemo nostrum omnis quod ratione voluptate? Eum impedit ipsam obcaecati placeat quisquam rerum saepe sit. Debitis?"
          }
          firstOptionalBtn={<CreateInterviewButton id={el.id} />}
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

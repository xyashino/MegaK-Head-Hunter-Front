import { useLoaderData } from "react-router-dom";
import { ManyStudentResponse, ActiveStudentResponse } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { Dropdown } from "@components/Dropdown/Dropdown";
import React, { useState } from "react";
import { SearchUsers } from "@components/Search/Search";
import classes from "./StudentsPage.module.css";
import { Button } from "@components/Button/Button";
import { FilterModal } from "@components/FilterModal/FilterModal";
import { Text } from "@components/Text/Text";

export const StudentsPage = () => {
  const { meta, data: activeStudents } = useLoaderData() as ManyStudentResponse;
  const [students, setStudents] =
    useState<ActiveStudentResponse[]>(activeStudents);

  const updateStudents = (e: ActiveStudentResponse[]) => {
    setStudents(e);
  };

  return (
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
      {students.map((el) => (
        <Dropdown
          key={el.id}
          userNameData={
            <Text>
              {el.firstname} {el.lastname?.charAt(0) + "."}
            </Text>
          }
          firstOptionalBtn={<Button>Zarezerwuj rozmowę</Button>}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum
          ipsum labore maxime natus nemo nostrum omnis quod ratione voluptate?
          Eum impedit ipsam obcaecati placeat quisquam rerum saepe sit.
          Debitis?
        </Dropdown>
      ))}
    </QueryManagement>
  );
};

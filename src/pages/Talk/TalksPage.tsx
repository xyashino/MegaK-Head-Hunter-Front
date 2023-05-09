import { useLoaderData } from "react-router-dom";
import { ActiveStudentResponse, PageMeta } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import React, { useState } from "react";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { SearchUsers } from "@components/Search/Search";

export const TalksPage = () => {
  const { data: activeStudents, meta } = useLoaderData() as {
    data: ActiveStudentResponse[];
    meta: PageMeta;
  };
  const [students, setStudents] = useState(activeStudents);

  return (
    <QueryManagement
      baseStudents={students}
      meta={meta}
      request={RequestPath.GetInterview}
      updateStudents={(e: ActiveStudentResponse[]) => {
        setStudents(e);
      }}
    >
      <div>
        <SearchUsers />
      </div>
      {students.map((el) => (
        <Dropdown userNameData={el.firstname} key={el.id}>
          {el.lastname}
        </Dropdown>
      ))}
    </QueryManagement>
  );
};

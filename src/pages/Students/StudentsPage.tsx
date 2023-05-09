import { useLoaderData } from "react-router-dom";
import { ActiveStudentResponse, ManyStudentResponse } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import { QueryManagement } from "@components/QueryManagement/QueryMenagment";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { useState } from "react";

export const StudentsPage = () => {
  const { meta, data: activeStudents } = useLoaderData() as ManyStudentResponse;
  const [students, setStudents] = useState(activeStudents);

  return (
    <QueryManagement
      baseStudents={activeStudents}
      meta={meta}
      request={RequestPath.GetStudents}
      updateStudents={(e: ActiveStudentResponse[]) => {setStudents(e)}}
    >
      {students.map((el) => (
        <Dropdown userNameData={el.firstname} key={el.id}>
          {el.lastname}
        </Dropdown>
      ))}
    </QueryManagement>
  );
};

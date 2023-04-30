import { TextArea } from "@components/TextArea/TextArea";
import React,{ SyntheticEvent, useContext, useLayoutEffect, useState } from "react";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";

enum InputName {
  Education = "education",
  Courses = "courses",
}
export const StudentsStepSeven = () => {
  const { studentData, setStudentData } = useContext(
    StudentRegistrationContext
  );
  const [data, setData] = useState({
    [InputName.Courses]: studentData.education,
    [InputName.Education]: studentData.courses,
  });

  useLayoutEffect(() => {
    setStudentData((prevState) => ({ ...prevState, ...data }));
  }, [data]);

  const handleInputChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLTextAreaElement;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <TextArea
        description="Edukacja"
        name={InputName.Courses}
        value={data[InputName.Education]}
        onChange={handleInputChange}
      />
      <TextArea
        description="Kursy"
        name={InputName.Courses}
        value={data[InputName.Courses]}
        onChange={handleInputChange}
      />
    </>
  );
};

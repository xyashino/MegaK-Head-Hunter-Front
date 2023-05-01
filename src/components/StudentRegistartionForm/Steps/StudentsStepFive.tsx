import React, { useContext } from "react";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import { UrlForm } from "@components/UrlForm/UrlForm";

export const StudentsStepFive = () => {
  const { studentData, setStudentData } = useContext(
    StudentRegistrationContext
  );
  const updateStudentData = (projectUrls: string[]) => {
    setStudentData((prevState) => ({
      ...prevState,
      projectUrls,
    }));
  };

  return (
    <UrlForm
      urlArray={studentData["projectUrls"]}
      description="Linki do projektów:"
      updateState={updateStudentData}
    />
  );
};

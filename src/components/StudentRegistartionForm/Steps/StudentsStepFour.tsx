import React, { useContext } from "react";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import { UrlForm } from "@components/UrlForm/UrlForm";

export const StudentsStepFour = () => {
  const { studentData, setStudentData } = useContext(
    StudentRegistrationContext
  );
  const updateStudentData = (portfolioUrls: string[]) => {
    setStudentData((prevState) => ({
      ...prevState,
      portfolioUrls,
    }));
  };

  return (
    <UrlForm
      urlArray={studentData.projectUrls}
      description="Protfolio:"
      updateState={updateStudentData}
    />
  );
};

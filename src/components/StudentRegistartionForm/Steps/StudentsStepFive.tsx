import React,{ SyntheticEvent, useContext, useState } from "react";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import { UrlForm } from "@components/UrlForm/UrlForm";

export const StudentsStepFive = () => {
  const { studentData, setStudentData } = useContext(
    StudentRegistrationContext
  );
  const [urlArray, setUrlArray] = useState(studentData["projectUrls"]);
  const addUrl = (e: SyntheticEvent, url: string) => {
    setStudentData((prevState) => ({
      ...prevState,
      projectUrls: [...prevState.projectUrls, url],
    }));
    setUrlArray((prevState) => [...prevState, url]);
  };
  return (
    <UrlForm
      addUrlMethod={addUrl}
      urlArray={urlArray}
      description="Linki do projektów:"
    />
  );
};

import React,{ SyntheticEvent, useContext, useState } from "react";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import { UrlForm } from "@components/UrlForm/UrlForm";

export const StudentsStepFour = () => {
  const { studentData, setStudentData } = useContext(
    StudentRegistrationContext
  );

  const [urlArray, setUrlArray] = useState(studentData["portfolioUrls"]);

  const addUrl = (e: SyntheticEvent, url: string) => {
    setStudentData((prevState) => ({
      ...prevState,
      portfolioUrls: [...prevState.portfolioUrls, url],
    }));
    setUrlArray((prevState) => [...prevState, url]);
  };

  return (
    <UrlForm
      addUrlMethod={addUrl}
      urlArray={urlArray}
      description="Protfolio:"
    />
  );
};

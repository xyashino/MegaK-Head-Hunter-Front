import { Input } from "@componentsCommon/Input/Input";
import { useValidationState } from "@hooks/useValidationState";
import React, { SyntheticEvent, useContext, useLayoutEffect } from "react";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import { StepAction } from "@enums/step-action.enum";
import { Avatar } from "@componentsCommon/Avatar/Avatar";
import { Text } from "@componentsCommon/Text/Text";
import classes from "../StudentRegistrationForm.module.css";

export const StudentsStepTwo = () => {
  const { studentData, setStudentData, dispatchStep } = useContext(
    StudentRegistrationContext
  );

  const {
    value: githubName,
    error: githubNameError,
    setValue: setGithubName,
    isValid: isValidGithubName,
  } = useValidationState(
    "Imię",
    {
      maxLength: 255,
      minLength: 1,
    },
    studentData.githubUsername
  );

  useLayoutEffect(() => {
    dispatchStep({
      type: StepAction.CanGetNextStep,
      payload: isValidGithubName,
    });
  }, [isValidGithubName]);

  useLayoutEffect(() => {
    setStudentData((prevState) => {
      return { ...prevState, githubUsername: githubName };
    });
  }, [githubName]);

  const handleInputChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value } = e.target as HTMLInputElement;
    setGithubName(value);
  };

  return (
    <>
      <Input
        value={githubName}
        description="Nazwa Github"
        placeholder="Wymagane"
        onChange={handleInputChange}
        hasError={githubNameError.show}
        errorMessage={githubNameError.message}
      />
      <Text customClasses={`${classes.text_info}`} weight="bold">
        Na podstawie tej nazwy będzie wyświetalny link i Avatar
      </Text>
      <div className={classes.info_container}>
        <div className={classes.avatar_container}>
          <Avatar githubUsername={githubName} type="large" />
        </div>
        <Text customClasses={`${classes.info_container_github}`}>
          Kliknij
          <a
            href={`https://github.com/${githubName}`}
            target="_blank"
            rel="noreferrer"
          >
            tutaj
          </a>
          żeby zobaczyć swój github
        </Text>

        <Text customClasses={`${classes.text_info}`} weight="bold" color="gray">
          ** Jeżeli nie widzisz Avataru prawdopodobnie podałeś złą nazwę **
        </Text>
      </div>
    </>
  );
};

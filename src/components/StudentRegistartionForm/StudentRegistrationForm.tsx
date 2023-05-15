import React, {
  SyntheticEvent,
  useReducer,
  useState,
} from "react";
import { StudentRegisterRequest } from "@backendTypes";
import classes from "./StudentRegistrationForm.module.css";
import { StepsPagination } from "@components/StepsPagination/StepsPagination";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import { StudentsStepOne } from "@components/StudentRegistartionForm/Steps/StudentsStepOne";
import { StudentsStepTwo } from "@components/StudentRegistartionForm/Steps/StudentsStepTwo";
import { StudentsStepThree } from "@components/StudentRegistartionForm/Steps/StudentsStepThree";
import { StudentsStepFour } from "@components/StudentRegistartionForm/Steps/StudentsStepFour";
import { StudentsStepFive } from "@components/StudentRegistartionForm/Steps/StudentsStepFive";
import { StudentsStepSix } from "@components/StudentRegistartionForm/Steps/StudentsStepSix";
import { StudentsStepSeven } from "@components/StudentRegistartionForm/Steps/StudentsStepSeven";
import { StudentsStepEight } from "@components/StudentRegistartionForm/Steps/StudentsStepEight";
import { DEFAULT_STUDENT_DATA } from "@constants/DefaultStudentData";
import { stepReducer } from "@reducers/StepReducer";
import { StepAction } from "@enums/step-action.enum";
export const StudentRegistrationForm = () => {
  const [step, dispatchStep] = useReducer(stepReducer, {
    maxStep: 8,
    lastStep: 1,
    currentStep: 1,
    canProceedToNextStep: false,
  });
  const [studentData, setStudentData] =
    useState<StudentRegisterRequest>(DEFAULT_STUDENT_DATA);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatchStep({ type: StepAction.NextStep });
  };
  return (
    <StudentRegistrationContext.Provider
      value={{ step, dispatchStep, studentData, setStudentData }}
    >
      <div
        className={classes.student_registration_container}
      >
        <h1 className={classes.student_registration_title}>
          Formularz rejestracji
        </h1>
        <form
          className={classes.student_registration_form}
          noValidate
          onSubmit={handleSubmit}
        >
          {step.currentStep === 1 ? <StudentsStepOne /> : undefined}
          {step.currentStep === 2 ? <StudentsStepTwo /> : undefined}
          {step.currentStep === 3 ? <StudentsStepThree /> : undefined}
          {step.currentStep === 4 ? <StudentsStepFour /> : undefined}
          {step.currentStep === 5 ? <StudentsStepFive /> : undefined}
          {step.currentStep === 6 ? <StudentsStepSix /> : undefined}
          {step.currentStep === 7 ? <StudentsStepSeven /> : undefined}
          {step.currentStep === 8 ? <StudentsStepEight /> : undefined}
        </form>
        <div style={{ textAlign: "center" }}>
          <StepsPagination />
          <h3 className={classes.student_registration_pages}>
            {step.currentStep}/{step.maxStep}
          </h3>
        </div>
      </div>
    </StudentRegistrationContext.Provider>
  );
};

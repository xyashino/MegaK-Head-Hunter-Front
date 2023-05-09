import React from "react";
import classes from "./StudentRegistrationPage.module.css";
import { StudentRegistrationForm } from "@components/StudentRegistartionForm/StudentRegistrationForm";
export const StudentRegistrationPage = () => {
  return (
    <div className={classes.student_registration}>
      <StudentRegistrationForm />
    </div>
  );
};

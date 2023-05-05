import classes from "./StudentRegistration.module.css";
import React from "react";
import { StudentRegistrationForm } from "@components/StudentRegistartionForm/StudentRegistrationForm";
export const StudentRegistration = () => {
  return (
    <div className={classes.student_registration}>
      <StudentRegistrationForm />
    </div>
  );
};

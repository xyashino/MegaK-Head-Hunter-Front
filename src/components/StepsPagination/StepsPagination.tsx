import React, { useContext } from "react";
import { Button } from "@componentsCommon/Button/Button";
import classes from "./StepsPagination.module.css";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import { StepAction } from "@enums/step-action.enum";

export const StepsPagination = () => {
  const {
    step: { currentStep, canProceedToNextStep, maxStep },
    dispatchStep,
  } = useContext(StudentRegistrationContext);

  const nextPage = () => dispatchStep({ type: StepAction.NextStep });
  const prevPage = () => dispatchStep({ type: StepAction.PrevStep });
  const customPage = (num: number) =>
    dispatchStep({ type: StepAction.CustomPage, payload: num});

  return (
    <div className={classes.form_pagination}>
      <Button
        onClick={prevPage}
        status={currentStep === 1 ? "disabled" : "active"}
        customClasses={classes.pagination_btn}
      >
        {"<"}
      </Button>

      <div className={classes.pagination}>
        {[...Array(maxStep)].map((_, index) => (
          <button
            key={index}
            className={`${classes.pagination_circle} ${
              index + 1 === currentStep ? classes.active : ""
            }`}
            onClick={() => customPage(index + 1)}
          />
        ))}
      </div>

      <Button
        onClick={nextPage}
        status={canProceedToNextStep ? "active" : "disabled"}
        customClasses={classes.pagination_btn}
      >
        {">"}
      </Button>
    </div>
  );
};

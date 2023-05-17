import { Input } from "@componentsCommon/Input/Input";
import React, {
  SyntheticEvent,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import { Text } from "@componentsCommon/Text/Text";
import { Select } from "@componentsCommon/Select/Select";
import { StudentRegisterRequest } from "@backendTypes";
import { Toggle } from "@componentsCommon/Toggle/Toggle";
import classes from "../StudentRegistrationForm.module.css";
import {
  EXPECTED_CONTRACT_TYPE_OPTIONS,
  EXPECTED_TYPE_WORK_OPTIONS,
} from "@constants/SelectOptions";
enum InputType {
  Month = "month",
  ExpectedContractType = "expectedContractType",
  ExpectedTypeWork = "expectedTypeWork",
}

export const StudentsStepThree = () => {
  const { studentData, setStudentData } = useContext(
    StudentRegistrationContext
  );

  const [month, setMonth] = useState({
    value: `${studentData.monthsOfCommercialExp}`,
    error: {
      show: false,
      message: "",
    },
  });

  useLayoutEffect(() => {
    setStudentData((prevState) => {
      return { ...prevState, monthsOfCommercialExp: +month.value };
    });
  }, [month]);

  const showError = (message: string) =>
    setMonth((prevState) => ({ ...prevState, error: { show: true, message } }));
  const updateValue = (value: string) =>
    setMonth(() => ({ value, error: { show: false, message: "" } }));

  const handleInputChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value, name } = e.target as HTMLInputElement;

    switch (name) {
      case InputType.Month:
        if ((value !== "" && Number(value) < 0) || Number(value) > 100) {
          return showError("Można wpisac miedzy 0-100");
        }
        updateValue(value);
        break;
      case InputType.ExpectedContractType:
        setStudentData((prevState) => ({
          ...prevState,
          expectedContractType:
            value as StudentRegisterRequest["expectedContractType"],
        }));
        break;
      case InputType.ExpectedTypeWork:
        setStudentData((prevState) => ({
          ...prevState,
          expectedTypeWork: value as StudentRegisterRequest["expectedTypeWork"],
        }));
        break;
      case "canTakeApprenticeship":
        setStudentData((prevState) => ({
          ...prevState,
          canTakeApprenticeship: !prevState.canTakeApprenticeship,
        }));
        break;
      default:
        break;
    }
  };

  const updateToggle = (isOn: boolean) => {
    setStudentData((prevState) => ({
      ...prevState,
      canTakeApprenticeship: isOn,
    }));
  };

  return (
    <>
      <Input
        type="number"
        name={InputType.Month}
        value={month.value}
        description="Doświadczenie (miesiące)"
        hasError={month.error.show}
        errorMessage={month.error.message}
        onChange={handleInputChange}
      />
      <Select
        options={EXPECTED_CONTRACT_TYPE_OPTIONS}
        description="Wybierz preferowaną umowę"
        value={studentData.expectedContractType}
        onChange={handleInputChange}
        name={InputType.ExpectedContractType}
      />
      <Select
        options={EXPECTED_TYPE_WORK_OPTIONS}
        description="Wybierz miejsce Pracy"
        value={studentData.expectedTypeWork}
        onChange={handleInputChange}
        name="expectedTypeWork"
      />
      <div className={classes.toggle_wrapper}>
        <Text customClasses={classes.toggle_text} weight="bold">
          Mogę odbyć bezpłatne praktyki
        </Text>{" "}
        <Toggle
          defaultValue={studentData.canTakeApprenticeship}
          runAfterChange={updateToggle}
        />
      </div>
    </>
  );
};

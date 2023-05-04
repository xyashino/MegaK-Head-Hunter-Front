import { Input } from "@components/Input/Input";
import { useValidationState } from "@hooks/useValidationState";
import React,{ SyntheticEvent, useContext, useLayoutEffect } from "react";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import { StepAction } from "@enums/step-action.enum";
enum InputName {
  Firstname = "firstname",
  Lastname = "lastname",
  Password = "pwd",
  ConfirmPassword = "confirmPwd",
}

export const StudentsStepOne = () => {
  const { studentData, setStudentData, dispatchStep } = useContext(
    StudentRegistrationContext
  );

  const {
    value: nameValue,
    error: nameError,
    setValue: setNameValue,
    isValid: isNameValid,
  } = useValidationState(
    "Imię",
    {
      maxLength: 255,
      minLength: 1,
      includeSpace: true,
    },
    studentData.firstname
  );

  const {
    value: lastnameValue,
    error: lastnameError,
    setValue: setLastnameValue,
    isValid: isLastnameValid,
  } = useValidationState(
    "Nazwisko",
    {
      maxLength: 255,
      minLength: 1,
      includeSpace: true,
    },
    studentData.lastname
  );

  const {
    value: pwdValue,
    error: pwdError,
    setValue: setPwdValue,
    isValid: isPwdValid,
  } = useValidationState(
    "Hasło",
    {
      maxLength: 255,
      minLength: 8,
    },
    studentData.pwd
  );

  const {
    value: confirmPwdValue,
    error: confirmPwdError,
    setValue: setConfirmPwdValue,
    isValid: isConfirmValid,
  } = useValidationState(
    "Hasło",
    {
      maxLength: 255,
      minLength: 8,
      sameAs: pwdValue,
    },
    studentData.pwd
  );

  useLayoutEffect(() => {
    dispatchStep({
      type: StepAction.CanGetNextStep,
      payload: isNameValid && isPwdValid && isLastnameValid && isConfirmValid,
    });
  }, [isNameValid, isPwdValid, isLastnameValid, isConfirmValid]);

  useLayoutEffect(() => {
    setStudentData((prevState) => {
      return {
        ...prevState,
        lastname: lastnameValue,
        pwd: pwdValue,
        firstname: nameValue,
      };
    });
  }, [pwdValue, lastnameValue, nameValue]);

  const handleInputChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value, name } = e.target as HTMLInputElement;

    switch (name) {
      case InputName.Firstname:
        setNameValue(value);
        break;
      case InputName.Lastname:
        setLastnameValue(value);
        break;
      case InputName.Password:
        setPwdValue(value);
        break;
      case InputName.ConfirmPassword:
        setConfirmPwdValue(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Input
        value={nameValue}
        description="Imię"
        name={InputName.Firstname}
        placeholder="Wymagane"
        onChange={handleInputChange}
        hasError={nameError.show}
        errorMessage={nameError.message}
      />
      <Input
        value={lastnameValue}
        description="Nazwisko"
        placeholder="Wymagane"
        name={InputName.Lastname}
        onChange={handleInputChange}
        hasError={lastnameError.show}
        errorMessage={lastnameError.message}
      />
      <Input
        preview
        value={pwdValue}
        description="Hasło"
        placeholder="Wymagane"
        name={InputName.Password}
        onChange={handleInputChange}
        hasError={pwdError.show}
        errorMessage={pwdError.message}
      />
      <Input
        preview
        value={confirmPwdValue}
        description="Powtórz Hasło"
        placeholder="Wymagane"
        name={InputName.ConfirmPassword}
        onChange={handleInputChange}
        hasError={confirmPwdError.show}
        errorMessage={confirmPwdError.message}
      />
    </>
  );
};

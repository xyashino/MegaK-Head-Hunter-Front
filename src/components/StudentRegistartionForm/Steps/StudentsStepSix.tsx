import { useValidationState } from "@hooks/useValidationState";
import { Input } from "@componentsCommon/Input/Input";
import React,{ SyntheticEvent, useContext, useLayoutEffect, useState } from "react";
import { TextArea } from "@componentsCommon/TextArea/TextArea";
import { PHONE_NUMBER_REGEXP } from "@constants/Regexp";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";

enum InputName {
  Phone = "phone",
  Salary = "salary",
  Bio = "bio",
}

export const StudentsStepSix = () => {
  const { studentData, setStudentData } = useContext(
      StudentRegistrationContext
  );

  const {
    value: phoneValue,
    setValue: setPhoneValue,
    error,
  } = useValidationState("", {
    minLength: 1,
    includeSpace: true,
    match: {
      regexp: PHONE_NUMBER_REGEXP,
      errorMessage: "Czy na pewno podałeś dobry numer ?",
    },
  }, studentData.tel);

  const [salary, setSalary] = useState(studentData.expectedSalary ?? "");
  const [bio, setBio] = useState(studentData.bio);

  useLayoutEffect((
  ) => {
    setStudentData(prevState => ({...prevState,bio,expectedSalary:salary,tel:phoneValue}))
  }, [phoneValue,bio,salary]);
  const handleInputChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value, name } = e.target as HTMLInputElement;
    switch (name) {
      case InputName.Phone:
        setPhoneValue(value);
        break
      case InputName.Bio:
        setBio(value);
        break
      case InputName.Salary:
        setSalary(value);
        break
      default:
        return;
    }
  };

  return (
      <>
        <Input
            value={phoneValue}
            hasError={error.show}
            errorMessage={error.message}
            messageType="warning"
            name={InputName.Phone}
            onChange={handleInputChange}
            description="Nr Telefonu"
            placeholder="Opcjonalne"
        />
        <Input
            value={salary}
            onChange={handleInputChange}
            description="Oczekiwane wynagrodzenie"
            placeholder="Opcjonalne"
            name={InputName.Salary}
        />
        <TextArea
            description="Bio"
            value={bio}
            name={InputName.Bio}
            onChange={handleInputChange}
        />
      </>
  );
};

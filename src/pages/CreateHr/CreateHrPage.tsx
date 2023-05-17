import React, { SyntheticEvent, useState } from "react";
import { RequestPath } from "@enums/request-path.enum";
import {CreateHrRequestBody} from "@backendTypes";
import { useAxios } from "@hooks/useAxios";
import { useValidationState } from "@hooks/useValidationState";
import { useValidationForm } from "@hooks/useValidationForm";
import { toast } from "react-hot-toast";
import { Button } from "@componentsCommon/Button/Button";
import { Input } from "@componentsCommon/Input/Input";
import classes from "./CreateHrPage.module.css";

enum InputName {
  Email = "email",
  Company = "company",
  FullName = "fullName",
  MaxStudents = "maxStudents",
}
export const CreateHrPage = () => {
  const {
    value: emailValue,
    error: emailError,
    setValue: setEmail,
    isValid: isEmailValid,
  } = useValidationState("Email", {
    minLength: 3,
    specialChars: ["@"],
    maxLength: 255,
  });

  const {
    value: companyValue,
    error: companyError,
    setValue: setCompany,
    isValid: isCompanyValid,
  } = useValidationState("Nazwa firmy", {
    minLength: 3,
    maxLength: 255,
    includeSpace: true,
  });

  const {
    value: fullNameValue,
    error: fullNameError,
    setValue: setFullName,
    isValid: isFullNameValid,
  } = useValidationState("Imię i nazwisko", {
    minLength: 3,
    maxLength: 255,
    includeSpace: true,
  });
  const [numVal, setNumVal] = useState("1");

  const { fetchData, loading } = useAxios({
    url: RequestPath.CreteHr,
    method: "POST",
    body: {
      email: emailValue,
      company: companyValue,
      fullName: fullNameValue,
      maxReservedStudents: +numVal,
    } as CreateHrRequestBody,
  });

  const isValidForm = useValidationForm({isValidInputs:[isEmailValid,isCompanyValid,isFullNameValid]})

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isValidForm) return toast.error("Uzupełnij Poprawnie Formularz ! ");
    fetchData(() => {
      toast.success("Dodano HR");
    });
  };

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value, name } = e.target as HTMLInputElement;
    switch (name) {
      case InputName.Email:
        setEmail(value);
        break;
      case InputName.FullName:
        setFullName(value);
        break;
      case InputName.Company:
        setCompany(value);
        break;
      case InputName.MaxStudents:
        if (Number(value) < 1 || Number(value) > 999) return;
        setNumVal(value);
        break;
      default:
        return;
    }
  };

  return (
    <form
      className={classes.register_hr_form}
      noValidate
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        placeholder="E-mail"
        name={InputName.Email}
        value={emailValue}
        hasError={emailError.show}
        errorMessage={emailError.message}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Imię i nazwisko"
        name={InputName.FullName}
        value={fullNameValue}
        hasError={fullNameError.show}
        errorMessage={fullNameError.message}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Firma"
        name={InputName.Company}
        value={companyValue}
        hasError={companyError.show}
        errorMessage={companyError.message}
        onChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Liczba studentów"
        name={InputName.MaxStudents}
        value={numVal}
        onChange={handleChange}
      />
      <Button loading={loading} status={isValidForm ? "active" : "disabled"}>
        Dodaj użytkownika
      </Button>
    </form>
  );
};

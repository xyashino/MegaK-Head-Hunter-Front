import React, { SyntheticEvent, useState } from "react";
import { useValidationState } from "@hooks/useValidationState";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import classes from "./RegisterHRUser.module.css";
import { useAxios } from "@hooks/useAxios";
import { CreateHrRequestBody } from "@backendTypes";
import { RequestPath } from "@enums/request-path.enum";
import { toast } from "react-hot-toast";

export const RegisterHRUser = () => {
  const {
    value: emailValue,
    error: emailError,
    setValue: setEmail,
  } = useValidationState("Email", {
    minLength: 3,
    specialChars: ["@"],
    maxLength: 255,
  });

  const {
    value: companyValue,
    error: companyError,
    setValue: setCompany,
  } = useValidationState("Nazwa firmy", {
    minLength: 3,
    maxLength: 255,
  });

  const {
    value: fullNameValue,
    error: fullNameError,
    setValue: setFullName,
  } = useValidationState("Imię i nazwisko", {
    minLength: 3,
    maxLength: 255,
  });
  const [numVal, setNumVal] = useState("1");

  const handleNumberInput = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (Number(value) < 1 || Number(value) > 999) return;
    setNumVal(value);
  };

  const { fetchData } = useAxios({
    url: RequestPath.CreteHr,
    method: "POST",
    body: {
      email: emailValue,
      company: companyValue,
      fullName: fullNameValue,
      maxReservedStudents: +numVal,
    } as CreateHrRequestBody,
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    fetchData(() => {
      toast["success"]("Dodano HR");
    });
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
        value={emailValue}
        hasError={emailError.show}
        errorMessage={emailError.message}
        onChange={(e: SyntheticEvent) =>
          setEmail((e.target as HTMLInputElement).value as string)
        }
      />
      <Input
        type="text"
        placeholder="Imię i nazwisko"
        value={fullNameValue}
        hasError={fullNameError.show}
        errorMessage={fullNameError.message}
        onChange={(e: SyntheticEvent) =>
          setFullName((e.target as HTMLInputElement).value as string)
        }
      />
      <Input
        type="text"
        placeholder="Firma"
        value={companyValue}
        hasError={companyError.show}
        errorMessage={companyError.message}
        onChange={(e: SyntheticEvent) =>
          setCompany((e.target as HTMLInputElement).value as string)
        }
      />
      <Input
        type="number"
        placeholder="Liczba studentów"
        value={numVal}
        onChange={handleNumberInput}
      />
      <Button>Dodaj użytkownika</Button>
    </form>
  );
};

import React, { SyntheticEvent } from "react";
import { useValidationState } from "@hooks/useValidationState"; 
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import classes from "./RegisterHRUser.module.css"

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

  const {
    value: maxReservedStudentsValue,
    error: maxReservedStudentsError,
    setValue: setMaxReservedStudents,
  } = useValidationState("Liczba studentów", {
    min: 1,
    max: 999, 
    minLength: 1,
  });

  return (
    <div className={classes.register_hr_form} >
      <Input
        type="email"
        placeholder="E-mail"
        value={emailValue}
        isError={emailError.show}
        message={emailError.message}
        onChange={(e: SyntheticEvent) =>
          setEmail((e.target as HTMLInputElement).value as string)
        }
      />
      <Input
        type="text"
        placeholder="Imię i nazwisko"
        value={fullNameValue}
        isError={fullNameError.show}
        message={fullNameError.message}
        onChange={(e: SyntheticEvent) =>
          setFullName((e.target as HTMLInputElement).value as string)
        }
      />
      <Input
        type="text"
        placeholder="Firma"
        value={companyValue}
        isError={companyError.show}
        message={companyError.message}
        onChange={(e: SyntheticEvent) =>
          setCompany((e.target as HTMLInputElement).value as string)
        }
      />
      <Input 
        type="number"
        placeholder="Liczba studentów"
        value={maxReservedStudentsValue}
        isError={maxReservedStudentsError.show}
        message={maxReservedStudentsError.message}
        onChange={(e: SyntheticEvent) =>
          setMaxReservedStudents((e.target as HTMLInputElement).value as string)
        }
      />
      <Button>Dodaj użytkownika</Button>
    </div>
  );
};

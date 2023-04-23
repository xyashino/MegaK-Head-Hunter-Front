import React, { SyntheticEvent } from "react";
import { useValidationState } from "@hooks/useValidationState";
import classes from "./RegisterHRUser.css";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";

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
  } = useValidationState("Company", {
    minLength: 3,
    maxLength: 255,
  });

  const {
    value: fullNameValue,
    error: fullNameError,
    setValue: setFullName,
  } = useValidationState("Full name", {
    minLength: 3,
    maxLength: 255,
  });

  const {
    value: maxReservedStudentsValue,
    error: maxReservedStudentsError,
    setValue: setMaxReservedStudents,
  } = useValidationState("", {
    minLength: 1,
  });

  return (
    <>
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
        placeholder="Full name"
        value={fullNameValue}
        isError={fullNameError.show}
        message={fullNameError.message}
        onChange={(e: SyntheticEvent) =>
          setFullName((e.target as HTMLInputElement).value as string)
        }
      />
      <Input
        type="text"
        placeholder="Company"
        value={companyValue}
        isError={companyError.show}
        message={companyError.message}
        onChange={(e: SyntheticEvent) =>
          setCompany((e.target as HTMLInputElement).value as string)
        }
      />
      <Input
        type="number"
        placeholder="Max reserved students"
        value={maxReservedStudentsValue}
        isError={maxReservedStudentsError.show}
        message={maxReservedStudentsError.message}
        onChange={(e: SyntheticEvent) =>
          setMaxReservedStudents((e.target as HTMLInputElement).value as string)
        }
      />
      <Button>Dodaj użytkownika</Button>
    </>
  );
};

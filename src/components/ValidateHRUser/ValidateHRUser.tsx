import React, { SyntheticEvent, useState } from "react";
import { useValidationState } from "@hooks/useValidationState";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import classes from "./ValidateHRUser.module.css";
import { useAxios } from "@hooks/useAxios";

export const ValidateHRUser = () => {
  const {
    value: passwordValue,
    error: passwordError,
    setValue: setPassword,
  } = useValidationState("Hasło", {
    minLength: 3,
    maxLength: 255,
  });

  const {
    value: confirmPasswordValue,
    error: confirmPasswordError,
    setValue: setConfirmPassword,
  } = useValidationState("Powtórz hasło", {
    minLength: 3,
    maxLength: 255,
    sameAs: passwordValue,
  });

  const { response } = useAxios({
    url: "/users",
    method: "POST",
    body: {
      password: passwordValue,
    },
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(response?.data);
  };

  return (
    <form className={classes.validate_hr_form} onClick={handleSubmit}>
      <Input
        type="password"
        placeholder="Podaj hasło"
        value={passwordValue}
        isError={passwordError.show}
        message={passwordError.message}
        onChange={(e: SyntheticEvent) =>
          setPassword((e.target as HTMLInputElement).value as string)
        }
      />
      <Input
        type="password"
        placeholder="Powtórz hasło"
        value={confirmPasswordValue}
        isError={confirmPasswordError.show}
        message={confirmPasswordError.message}
        onChange={(e: SyntheticEvent) =>
          setConfirmPassword((e.target as HTMLInputElement).value as string)
        }
      />

      <Button>Zapisz</Button> 
    </form>
  );
};

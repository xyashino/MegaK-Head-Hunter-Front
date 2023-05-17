import React, {SyntheticEvent} from "react";
import { useValidationState } from "@hooks/useValidationState";
import { Input } from "@componentsCommon/Input/Input";
import { Button } from "@componentsCommon/Button/Button";
import classes from "./RegisterHrPage.module.css";
import { useAxios } from "@hooks/useAxios";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import { RequestPath } from "@enums/request-path.enum";
import { RegisterHrRequestBody } from "@backendTypes";
import {Logo} from "@componentsCommon/Logo/Logo";
import {useValidationForm} from "@hooks/useValidationForm";

enum InputName {
  pwd = "pwd",
  confirmPwd = "confirmPwd",
}
export const RegisterHrPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    value: passwordValue,
    error: passwordError,
    setValue: setPassword,
    isValid: isPasswordValid,
  } = useValidationState("Hasło", {
    minLength: 8,
    maxLength: 255,
  });

  const {
    value: confirmPasswordValue,
    error: confirmPasswordError,
    setValue: setConfirmPassword,
      isValid:isConfirmPasswordValid
  } = useValidationState("Hasło", {
    minLength: 8,
    maxLength: 255,
    sameAs: passwordValue,
  });
  const isFormValid = useValidationForm({isValidInputs:[isPasswordValid,isConfirmPasswordValid]})
  const { fetchData, loading } = useAxios({
    url: `${RequestPath.RegisterHr}${id}`,
    method: "POST",
    body: {
      pwd: passwordValue,
    } as RegisterHrRequestBody,
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if(!isFormValid) return toast.error('Uzupełnij Poprawnie Formularz')
    fetchData(() => {
      toast.success("Pomyślnie Aktywowano Konto");
      navigate(PageRouter.Main);
    });
  };

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value, name } = e.target as HTMLInputElement;
    switch (name) {
      case InputName.pwd:
        setPassword(value);
        break;
      case InputName.confirmPwd:
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={classes.validate_hr_form} onSubmit={handleSubmit}>
      <Logo/>
      <Input
        preview
        name={InputName.pwd}
        description="Podaj hasło"
        placeholder="Hasło"
        value={passwordValue}
        hasError={passwordError.show}
        errorMessage={passwordError.message}
        onChange={handleChange}
      />
      <Input
        preview
        description="Powtórz hasło"
        placeholder="Hasło"
        name={InputName.confirmPwd}
        value={confirmPasswordValue}
        hasError={confirmPasswordError.show}
        errorMessage={confirmPasswordError.message}
        onChange={handleChange}
      />
      <Button loading={loading} status={isFormValid ? "active" : "disabled"}>
        Zapisz
      </Button>
    </form>
  );
};

import React, { SyntheticEvent } from "react";
import { Button } from "@componentsCommon/Button/Button";
import { Input } from "@componentsCommon/Input/Input";
import { Logo } from "@componentsCommon/Logo/Logo";
import { Text } from "@componentsCommon/Text/Text";
import { PageRouter } from "@enums/page-router.enum";
import { RequestPath } from "@enums/request-path.enum";
import { useAxios } from "@hooks/useAxios";
import { useValidationState } from "@hooks/useValidationState";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import classes from "./PwdResetPage.module.css";
import { useValidationForm } from "@hooks/useValidationForm";

enum InputName {
  pwd = "pwd",
  confirmPwd = "confirmPwd",
}
export const PwdResetPage = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const userId = searchParams.get("id");
  const resetPasswordToken = searchParams.get("token");

  const {
    value: pwdValue,
    error: pwdError,
    setValue: setPwd,
    isValid: isPwdValid,
  } = useValidationState("Hasło", {
    minLength: 8,
    maxLength: 255,
  });

  const {
    value: confirmPwdValue,
    error: confirmPwdError,
    setValue: confirmSetPwd,
    isValid: isConfirmValid,
  } = useValidationState("Hasło", {
    minLength: 8,
    maxLength: 255,
    sameAs: pwdValue,
  });

  const isValid = useValidationForm({
    isValidInputs: [isPwdValid, isConfirmValid],
  });

  const { fetchData, loading } = useAxios({
    url: RequestPath.PasswordReset,
    method: "POST",
    body: {
      userId,
      resetPasswordToken,
      newPassword: pwdValue,
    },
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isValid) return toast.error("Uzupełnij poprawnie formularz! ");
    await fetchData(() => {
      toast.success("Hasło zostało zmienione");
      navigate(PageRouter.Login);
    });
  };

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    switch (name) {
      case InputName.pwd:
        setPwd(value);
        break;
      case InputName.confirmPwd:
        confirmSetPwd(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Logo />
      <Input
        preview
        placeholder="Password"
        type="password"
        value={pwdValue}
        errorMessage={pwdError.message}
        hasError={pwdError.show}
        name={InputName.pwd}
        onChange={handleChange}
      />
      <Input
        preview
        placeholder="Confirm Password"
        type="password"
        value={confirmPwdValue}
        errorMessage={confirmPwdError.message}
        hasError={confirmPwdError.show}
        name={InputName.confirmPwd}
        onChange={handleChange}
      />
      <div className={classes.text_section}>
        <Text>Po zapisaniu Twoje hasło zostanie zmienione</Text>
        <Button loading={loading}>Zapisz</Button>
      </div>
    </form>
  );
};

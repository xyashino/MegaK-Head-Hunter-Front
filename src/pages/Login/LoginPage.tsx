import React, { SyntheticEvent } from "react";
import { Logo } from "@componentsCommon/Logo/Logo";
import { Input } from "@componentsCommon/Input/Input";
import { Text } from "@componentsCommon/Text/Text";
import { Button } from "@componentsCommon/Button/Button";
import classes from "./LoginPage.module.css";
import { useValidationState } from "@hooks/useValidationState";
import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { useNavigate } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import { toast } from "react-hot-toast";
import { useValidationForm } from "@hooks/useValidationForm";

export const LoginPage = () => {
  const navigate = useNavigate();
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
    value: pwdValue,
    error: pwdError,
    setValue: setPwd,
    isValid: isPwdValid,
  } = useValidationState("Hasło", {
    minLength: 8,
    maxLength: 255,
  });

  const { fetchData, loading } = useAxios({
    url: RequestPath.Login,
    method: "POST",
    body: {
      email: emailValue,
      pwd: pwdValue,
    },
  });

  const isValidForm = useValidationForm({
    isValidInputs: [isEmailValid, isPwdValid],
  });
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isValidForm) return toast.error("Uzpełnij poprawnie Formularz");
    await fetchData(() => {
      toast.success("Zalogowano");
      navigate(PageRouter.Main);
    });
  };

  return (
    <form
      className={classes.login_container}
      noValidate
      onSubmit={handleSubmit}
    >
      <Logo />
      <Input
        placeholder="E-mail"
        hasError={emailError.show}
        errorMessage={emailError.message}
        value={emailValue}
        type="email"
        onChange={(e: SyntheticEvent) =>
          setEmail((e.target as HTMLInputElement).value as string)
        }
      />
      <Input
        preview
        placeholder="Password"
        value={pwdValue}
        errorMessage={pwdError.message}
        hasError={pwdError.show}
        onChange={(e: SyntheticEvent) =>
          setPwd((e.target as HTMLInputElement).value as string)
        }
      />
      <Text
        style={{
          marginLeft: "auto",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => navigate(PageRouter.PwdForgot)}
      >
        Zapomniałeś hasła?
      </Text>
      <div className={classes.login_text_container}>
        <Text>
          Nie masz konta?{" "}
          <u>
            <b>Zarejestruj się</b>
          </u>
        </Text>
        <Button loading={loading}>Zaloguj się</Button>
      </div>
    </form>
  );
};

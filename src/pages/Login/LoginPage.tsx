import React, { SyntheticEvent } from "react";
import { Logo } from "@components/Logo/Logo";
import { Input } from "@components/Input/Input";
import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import classes from "./LoginPage.module.css";
import { useValidationState } from "@hooks/useValidationState";
import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { useNavigate } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import {toast} from "react-hot-toast";

export const LoginPage = () => {
  const navigate = useNavigate();
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
    value: pwdValue,
    error: pwdError,
    setValue: setPwd,
  } = useValidationState("Hasło", {
    minLength: 8,
    maxLength: 255,
  });

  const { fetchData ,loading} = useAxios({
    url: RequestPath.Login,
    method: "POST",
    body: {
      email: emailValue,
      pwd: pwdValue,
    },
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetchData(() => {
      toast['success']('Zalogowano');
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
        type="password"
        value={pwdValue}
        errorMessage={pwdError.message}
        hasError={pwdError.show}
        onChange={(e: SyntheticEvent) =>
          setPwd((e.target as HTMLInputElement).value as string)
        }
      />
      <Text style={{ marginLeft: "auto", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate(PageRouter.PwdForgot)}>Zapomniałeś hasła?</Text>
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

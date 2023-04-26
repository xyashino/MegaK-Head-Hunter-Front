import React, { SyntheticEvent, useState } from "react";
import { Logo } from "@components/Logo/Logo";
import { Input } from "@components/Input/Input";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Button } from "@components/Button/Button";
import classes from "./LoginPage.module.css";
import { useValidationState } from "@hooks/useValidationState";
import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { useNavigate } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import { Info } from "@components/Info/Info";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ show: false, msg: "", type: "success" });
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

  const { fetchData, error } = useAxios({
    url: RequestPath.Login,
    method: "POST",
    body: {
      email: emailValue,
      pwd: pwdValue,
    },
  });

  const resetInfo = () => setInfo({ show: false, msg: "", type: "success" });
  const showError = () => setInfo({ show: true, msg: error, type: "error" });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetchData(() => {
      navigate(PageRouter.Main);
    }, showError);
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
        isError={emailError.show}
        message={emailError.message}
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
        message={pwdError.message}
        isError={pwdError.show}
        onChange={(e: SyntheticEvent) =>
          setPwd((e.target as HTMLInputElement).value as string)
        }
      />
      <Paragraph style={{ marginLeft: "auto" }}>Zapomniałeś hasła?</Paragraph>
      <div className={classes.login_text_container}>
        <Paragraph>
          Nie masz konta?{" "}
          <u>
            <b>Zarejestruj się</b>
          </u>
        </Paragraph>
        <Button>Zaloguj się</Button>
      </div>
      {info.show ? (
        <Info
          text={info.msg}
          clickMethod={resetInfo}
          type={info.type as "success"}
        />
      ) : null}
    </form>
  );
};

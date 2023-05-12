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

export const PwdForgotPage = () => {
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

  const { fetchData, loading } = useAxios({
    url: RequestPath.SendPasswordReset,
    method: "POST",
    body: {
      email: emailValue,
    },
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetchData(() => {
      toast["success"]("Email został wysłany");
      navigate(PageRouter.Login);
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
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
      <div className={classes.text_section}>
        {loading && <Text>Wysyłanie...</Text>}
        {!loading && (
          <Text>
            Na podany adres email zostanie wysłany tymczasowy link do zmiany
            hasła
          </Text>
        )}
        <Button loading={loading}>Wyślij</Button>
      </div>
      <Text
        style={{
          marginLeft: "auto",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => navigate(PageRouter.Main)}
      >
        Wróć do strony logowania
      </Text>
    </form>
  );
};

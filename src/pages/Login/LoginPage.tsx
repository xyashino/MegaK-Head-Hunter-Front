import React from "react";
import { Logo } from "../../components/Logo/Logo";
import { Input } from "../../components/Input/Input";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Button } from "../../components/Button/Button";
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <div className="login-container">
      <Logo />
      <Input placeholder="E-mail" type="email" isError={true} message="ERROR" />
      <Input placeholder="Password" type="password" />
      <Paragraph style={{ marginLeft: "auto" }}>Zapomniałeś hasła?</Paragraph>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Paragraph>
          Nie masz konta?{" "}
          <u>
            <b>Zarejestruj się</b>
          </u>
        </Paragraph>
        <Button>Zaloguj się</Button>
      </div>
    </div>
  );
};

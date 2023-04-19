import React from "react";
import { Logo } from "../components/Logo/Logo";
import { Input } from "../components/Input/Input";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { Button } from "../components/Button/Button";
import "./LoginScreen.css";

export const LoginScreen = () => {
  return (
    <div className="login-container">
      <Logo />
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
      <Paragraph />
      <Button>Zaloguj się</Button>
    </div>
  );
};

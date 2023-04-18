import React from "react";
import { Image } from "../components/Image/Image";
import { Input } from "../components/Input/Input";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { Button } from "../components/Button/Button";

export const LoginScreen = () => {
  return (
    <div className="login-container">
      <Image />
      <Input />
      <Input />
      <Paragraph />
      <Button />
    </div>
  );
};

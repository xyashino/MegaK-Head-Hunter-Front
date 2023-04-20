import React, {SyntheticEvent, useState} from "react";
import { Logo } from "../../components/Logo/Logo";
import { Input } from "../../components/Input/Input";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Button } from "../../components/Button/Button";
import classes from "./LoginPage.module.css";
import {useValidationState} from "@hooks/useValidationState";
import {AxiosBase} from "../../utils/axios-base";
import {useNavigate} from "react-router-dom";
import {isAxiosError} from "axios";
import {ErrorInfo} from "@components/ErrorInfo/ErrorInfo";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [isError,setIsError]= useState(false)
    const [errorMessage,setErrorMessage]= useState('')
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

    const handleSubmit =async ()=>{
      try {
          await AxiosBase.post('/auth/login',{
              email : emailValue,
              pwd: pwdValue
          })
          navigate('/');
      } catch (error) {
          let message = "Unknown Error";
          if (isAxiosError(error)) {
              message =
                  error.response?.data.message ??
                  error.response?.data.error ??
                  error.message;
          }

          setErrorMessage(message);
          setIsError(true);
      }

    };
    const hideAlert= () => setIsError(false);
    return (
        <div className={classes.login_container}>
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
                <Button onClick={handleSubmit}>Zaloguj się</Button>
            </div>
            <ErrorInfo title={errorMessage} clickMethod={hideAlert} show={isError}/>
        </div>
  );
};

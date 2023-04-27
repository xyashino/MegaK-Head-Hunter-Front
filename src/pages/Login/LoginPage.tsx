import React, {SyntheticEvent} from "react";
import { Logo } from "@components/Logo/Logo";
import { Input } from "@components/Input/Input";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Button } from "@components/Button/Button";
import classes from "./LoginPage.module.css";
import {useValidationState} from "@hooks/useValidationState";


export const LoginPage = () => {
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
                className={classes.login_text_container}
            >
                <Paragraph>
                    Nie masz konta?{" "}
                    <u>
                        <b>Zarejestruj się</b>
                    </u>
                </Paragraph>
                <Button className={classes.button}>Zaloguj się</Button>
            </div>
        </div>
  );
};

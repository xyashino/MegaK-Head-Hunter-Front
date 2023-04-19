import React, {SyntheticEvent, useState} from "react";
import {useValidationState} from "../../hooks/useValidationState";
import {Logo} from "../../components/Logo/Logo";
import {Input} from "../../components/Input/Input";
import {Paragraph} from "../../components/Paragraph/Paragraph";
import {Button} from "../../components/Button/Button";
import {Error} from "../../components/common/error";

import "./LoginPage.css";

export const LoginPage = () => {

    const {
        value: emailValue,
        error: emailError,
        setValue: setEmail,
    } = useValidationState("email", {
        minLength: 3,
        specialChars: ["@"],
        maxLength: 255,
    });

    const {
        value: pwdValue,
        error: pwdError,
        setValue: setPwd,
    } = useValidationState("password", {
        minLength: 8,
        maxLength: 255,
    });

    const [loginError, setLoginError] = useState(null);

    const handleLogin = async (e: SyntheticEvent): Promise<void> => {
        e.preventDefault();

        const res = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailValue,
                pwdValue,
            }),
        });

        const data = await res.json();

        if (res.status >= 400) {
            setLoginError(data.message);
        } else {
            setLoginError(null)
        }
    }

    return (
        <div className="login-container">
            <Logo/>
            <form className="login-form" onSubmit={handleLogin}></form>
            <Input
                placeholder="E-mail"
                type="email"
                isError={emailError.show}
                message={emailError.message}
                value={emailValue}
                onChange={(e: SyntheticEvent) => setEmail((e.target as HTMLInputElement).value as string)}
            />
            <Input
                placeholder="Password"
                type="password"
                isError={emailError.show}
                message={pwdError.message}
                value={pwdValue}
                onChange={(e: SyntheticEvent) => setPwd((e.target as HTMLInputElement).value as string)}
            />
            {loginError && <Error title={loginError}/>}
            <Paragraph style={{marginLeft: "auto"}}>Zapomniałeś hasła?</Paragraph>
            <Button>Zaloguj się</Button>
        </div>
    );
};

import {useNavigate} from "react-router-dom";
import {useValidationState} from "@hooks/useValidationState";
import {Logo} from "@components/Logo/Logo";
import React, {SyntheticEvent} from "react";
import {useAxios} from "@hooks/useAxios";
import {RequestPath} from "@enums/request-path.enum";
import {toast} from "react-hot-toast";
import {PageRouter} from "@enums/page-router.enum";
import {Input} from "@components/Input/Input";
import {Button} from "@components/Button/Button";
import {Text} from "@components/Text/Text";
import classes from './PwdReset.module.css';

export const SendPwdReset = () => {
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

    const {fetchData} = useAxios({
        url: RequestPath.SendPasswordReset,
        method: 'POST',
        body: {
            email: emailValue
        }
    });

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetchData(() => {
            toast['success']('Email został wysłany');
            navigate(PageRouter.Login);
        });
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Logo/>
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
                <Text>
                    Na podany adres email zostanie wysłany link do zmiany hasła
                </Text>
            <Button>Wyślij</Button>
            </div>

        </form>
    )
}

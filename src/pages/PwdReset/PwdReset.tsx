import {Input} from "@components/Input/Input";
import React, {SyntheticEvent} from "react";
import {Logo} from "@components/Logo/Logo";
import {useValidationState} from "@hooks/useValidationState";
import classes from './PwdReset.module.css';
import {Button} from "@components/Button/Button";
import {Text} from "@components/Text/Text";
import {useAxios} from "@hooks/useAxios";
import {RequestPath} from "@enums/request-path.enum";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {PageRouter} from "@enums/page-router.enum";

export const PwdReset = () => {

    const navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);
    const userId = searchParams.get('id');
    const resetPasswordToken = searchParams.get('token');

    const {
        value: pwdValue,
        error: pwdError,
        setValue: setPwd,
    } = useValidationState("Hasło", {
        minLength: 8,
        maxLength: 255,
    });

    const {
        value: confirmPwdValue,
        error: confirmPwdError,
        setValue: confirmSetPwd,
    } = useValidationState("Hasło", {
        minLength: 8,
        maxLength: 255,
        sameAs: pwdValue,
    });


    const {fetchData} = useAxios({
        url: RequestPath.PasswordReset,
        method: 'POST',
        body: {
            userId,
            resetPasswordToken,
            newPassword: pwdValue
        }
    });

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetchData(() =>  {
            toast['success']('Hasło zostało zmienione');
            navigate(PageRouter.Main);
        })
    }

    return(
        <form className={classes.form} onSubmit={handleSubmit}>
            <Logo/>
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
            <Input
                preview
                placeholder="Confirm Password"
                type="password"
                value={confirmPwdValue}
                errorMessage={confirmPwdError.message}
                hasError={confirmPwdError.show}
                onChange={(e: SyntheticEvent) =>
                    confirmSetPwd((e.target as HTMLInputElement).value as string)
                }
            />
            <div className={classes.text_section}>
                <Text>
                    Po zapisaniu Twoje hasło zostanie zmienione
                </Text>
                <Button>Zapisz</Button>
            </div>
        </form>
    )
}

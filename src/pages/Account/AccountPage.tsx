import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { Text } from "@components/Text/Text";
import { RequestPath } from "@enums/request-path.enum";
import { useAxios } from "@hooks/useAxios";
import { useValidationState } from "@hooks/useValidationState";
import { SyntheticEvent, useLayoutEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useOutletContext } from "react-router-dom";
import { OutletData } from "../../types/OutletData";
import classes from "./AccountPage.module.css";
enum InputName {
  OldPwd = "oldPwd",
  NewPwd = "newPwd",
  ConfirmPwd = "confirmPwd",
}
export const AccountPage = () => {
  const { userId } = useOutletContext() as OutletData;
  const [validForm, setValidForm] = useState(false);
  const {
    value: oldPwd,
    setValue: setOldPwd,
    error: oldPwdError,
    isValid: validOldPwd,
  } = useValidationState("Stare Hasło", {
    minLength: 8,
    maxLength: 255,
  });

  const {
    value: newPwd,
    setValue: setNewPwd,
    error: newPwdError,
    isValid: validNewPwd,
  } = useValidationState("Hasło", {
    minLength: 8,
    maxLength: 255,
  });

  const {
    value: confirmPwd,
    setValue: setConfirmPwd,
    error: confirmPwdError,
    isValid: validConfirmPwd,
  } = useValidationState("Hasła", {
    minLength: 8,
    sameAs: newPwd,
  });

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    switch (name) {
      case InputName.OldPwd:
        setOldPwd(value);
        break;
      case InputName.NewPwd:
        setNewPwd(value);
        break;
      case InputName.ConfirmPwd:
        setConfirmPwd(value);
        break;
      default:
        return;
    }
  };

  const { fetchData, loading } = useAxios({
    url: `${RequestPath.User}${userId}`,
    method: "PATCH",
    body: {
      oldPwd,
      newPwd,
    },
  });

  useLayoutEffect(() => {
    setValidForm(validNewPwd && validOldPwd && validConfirmPwd);
  }, [validNewPwd, validOldPwd, validConfirmPwd]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!validForm) return toast["error"]("Uzupełnij poprawnie Formularz ! ");
    fetchData(() => {
      toast["success"]("Zmieniono Hasło");
    });
  };

  return (
    <div className={classes.account_page}>
      <h1 style={{ margin: "20px" }}>
        <Text weight="bold">Zarządzaj Kontem</Text>
      </h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2>
          <Text weight="bold">Zmiana Hasła:</Text>
        </h2>
        <Input
          preview
          value={oldPwd}
          description="Stare Hasło"
          errorMessage={oldPwdError.message}
          hasError={oldPwdError.show}
          name={InputName.OldPwd}
          onChange={handleChange}
        />
        <Input
          preview
          value={newPwd}
          description="Hasło"
          errorMessage={newPwdError.message}
          hasError={newPwdError.show}
          name={InputName.NewPwd}
          onChange={handleChange}
        />
        <Input
          preview
          value={confirmPwd}
          description="Powtórz Hasło"
          errorMessage={confirmPwdError.message}
          hasError={confirmPwdError.show}
          name={InputName.ConfirmPwd}
          onChange={handleChange}
        />
        <Button
          customClasses={classes.form_submit_btn}
          loading={loading}
          status={validForm ? "active" : "disabled"}
        >
          Zapisz Zmiany
        </Button>
      </form>
    </div>
  );
};

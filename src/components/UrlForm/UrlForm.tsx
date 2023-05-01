import { useValidationState } from "@hooks/useValidationState";
import { URL_REGEXP } from "@constants/Regexp";
import React, { SyntheticEvent } from "react";
import { Text } from "@components/Text/Text";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import classes from "./UrlForm.module.css";

interface Props {
  urlArray: string[];
  addUrlMethod: (e: SyntheticEvent, name: string) => void;
  description?: string;
}

const Empty = (
  <Text weight="bold" customClasses={`${classes.url_form_empty}`}>
    Brak żadnych linków :/
  </Text>
);

export const UrlForm = ({ addUrlMethod, urlArray, description }: Props) => {
  const {
    value: url,
    setValue: setUrl,
    isValid: isValidUrl,
    error,
  } = useValidationState("Url", {
    minLength: 1,
    includeSpace: true,
    match: {
      regexp: URL_REGEXP,
      errorMessage: "Podałeś nieprawidłowy URL",
    },
  });
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isValidUrl) return;
    addUrlMethod(e, url);
    setUrl("");
  };

  const handleInputChange = (e: SyntheticEvent) =>
    setUrl((e.target as HTMLInputElement).value);

  return (
    <div>
      <Text
        weight="bold"
        color="gray"
        customClasses={`${classes.url_form_description}`}
      >
        {description}
      </Text>
      <div className={classes.url_form}>
        <Input
          value={url}
          onChange={handleInputChange}
          hasError={error.show}
          errorMessage={error.message}
          placeholder="Opcjonalne"
        >
          <Button
            customClasses={`${classes.url_form_btn}`}
            onClick={handleClick}
          >
            <Text weight="bold">Dodaj</Text>
          </Button>
        </Input>
      </div>
      <div className={classes.url_form_container}>
        {urlArray.length === 0
          ? Empty
          : urlArray.map((el, i) => (
              <a href={el} target="_blank" key={i} rel="noreferrer">
                {el}
              </a>
            ))}
      </div>
    </div>
  );
};

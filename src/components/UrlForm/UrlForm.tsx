import { useValidationState } from "@hooks/useValidationState";
import { URL_REGEXP } from "@constants/Regexp";
import React, { SyntheticEvent, useLayoutEffect, useState } from "react";
import { Text } from "@components/Text/Text";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import classes from "./UrlForm.module.css";

interface Props {
  urlArray: string[];
  description?: string;
  updateState: (urls: string[]) => void;
}

const Empty = (
  <Text weight="bold" customClasses={`${classes.url_form_empty}`}>
    Brak żadnych linków :/
  </Text>
);

export const UrlForm = ({ urlArray, description, updateState }: Props) => {
  const {
    value: url,
    setValue: setUrl,
    error,
  } = useValidationState("Url", {
    minLength: 1,
    includeSpace: true,
    match: {
      regexp: URL_REGEXP,
      errorMessage: "Podałeś nieprawidłowy URL",
    },
  });

  const [urls, setUrls] = useState(urlArray);
  const handleInputChange = (e: SyntheticEvent) =>
    setUrl((e.target as HTMLInputElement).value);

  useLayoutEffect(() => {
    updateState(urls);
  }, [urls]);

  const addUrl = (e: SyntheticEvent) => {
    e.preventDefault();
    setUrls((prevState) => [...prevState, url]);
    setUrl("");
  };

  const removeUrl = (index: number, e: SyntheticEvent) => {
    e.preventDefault();
    setUrls((prevState) => {
      const projectUrls = [...prevState];
      projectUrls.splice(index, 1);
      return projectUrls;
    });
  };

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
          <Button customClasses={`${classes.url_form_btn}`} onClick={addUrl}>
            <Text weight="bold">Dodaj</Text>
          </Button>
        </Input>
      </div>
      <div className={classes.url_form_container}>
        {urls.length === 0
          ? Empty
          : urls.map((el, i) => (
              <div key={i}>
                <a href={el} target="_blank" rel="noreferrer">
                  {el}
                </a>
                <button onClick={(e) => removeUrl(i, e)}>Usuń</button>
              </div>
            ))}
      </div>
    </div>
  );
};

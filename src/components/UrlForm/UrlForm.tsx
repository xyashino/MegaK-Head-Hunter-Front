import { useValidationState } from "@hooks/useValidationState";
import { URL_REGEXP } from "@constants/Regexp";
import React, { SyntheticEvent, useLayoutEffect, useState } from "react";
import { Text } from "@componentsCommon/Text/Text";
import { Input } from "@componentsCommon/Input/Input";
import { Button } from "@componentsCommon/Button/Button";
import classes from "./UrlForm.module.css";
import { LinkWithIcon } from "@components/LinkWithIcon/LinkWithIcon";
import attachSvg from "@assets/attach_file.svg";

interface Props {
  urlArray: string[];
  description?: string;
  updateState: (urls: string[]) => void;
}

const Empty = (
  <Text weight="bold" customClasses={`${classes.url_form_empty}`}>
    Brak żadnych linków &#128543;
  </Text>
);

export const UrlForm = ({ urlArray, description, updateState }: Props) => {
  const {
    value: url,
    setValue: setUrl,
    error,
    isValid,
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
    if (!isValid) return;
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
    <form className={classes.url_container} onSubmit={addUrl}>
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
            status={isValid ? "active" : "disabled"}
          >
            <Text weight="bold">Dodaj</Text>
          </Button>
        </Input>
      </div>
      <div className={classes.url_form_container}>
        {urls.length === 0
          ? Empty
          : urls.map((el, i) => (
              <div key={i} className={classes.url_wrapper}>
                <LinkWithIcon
                  to={el}
                  text={el}
                  icon={attachSvg}
                  style={{ padding: "0.5rem 1rem" }}
                  key={crypto.randomUUID()}
                />
                <Button onClick={(e) => removeUrl(i, e)}> &#10008;</Button>
              </div>
            ))}
      </div>
    </form>
  );
};

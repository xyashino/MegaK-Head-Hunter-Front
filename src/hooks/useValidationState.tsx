import { useLayoutEffect, useState } from "react";

interface ValidationOptions {
  minLength: number;
  maxLength?: number;
  specialChars?: string[];
  includeSpace?: boolean;
  sameAs?: string;
  match?: {
    regexp: RegExp;
    errorMessage: string;
  };
}

function validateInputValue(
  inputValue: string,
  inputName: string,
  validationData: ValidationOptions
) {
  const {
    minLength,
    maxLength,
    specialChars,
    sameAs,
    includeSpace = false,
    match,
  } = validationData;
  const { length } = inputValue;
  switch (true) {
    case length < minLength:
      throw new Error(
        `${inputName} musi mieć min. ${
          minLength <= 4 ? `${minLength} znaki.` : `${minLength} znaków.`
        }`
      );
    case maxLength && length > maxLength:
      throw new Error(
        `${inputName} musi mieć max. ${
          (maxLength as number) <= 4
            ? `${maxLength} znaki.`
            : `${maxLength} znaków.`
        } znaków`
      );
    case !includeSpace && inputValue.includes(" "):
      throw new Error(`${inputName} nie może zawierać spacji.`);
    case specialChars?.some((char) => !inputValue.includes(char)):
      throw new Error(`${inputName} musi zawierać ${specialChars?.join(",")}`);
    case sameAs && sameAs !== inputValue:
      throw new Error(`${inputName} się nie zgadza`);
    case !!match && !inputValue.match(match.regexp):
      throw new Error(match?.errorMessage);
    default:
      return true;
  }
}

interface UseValidationStateResult {
  value: string;
  setValue: (newValue: string) => void;
  isEmpty: boolean;
  isValid: boolean;
  error: {
    show: boolean;
    message: string;
  };
}
export const useValidationState = (
  inputName: string,
  validationData: ValidationOptions,
  defaultValue?: string
): UseValidationStateResult => {
  const [value, setValue] = useState(defaultValue ?? "");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  useLayoutEffect(() => {
    setShowError(!isEmpty && !isValid);
  }, [isEmpty, isValid]);

  useLayoutEffect(() => {
    try {
      setIsEmpty(value.length === 0);
      validateInputValue(value, inputName, validationData);
      setIsValid(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setErrorMessage(message);
      setIsValid(false);
    }
  }, [value, validationData.sameAs]);

  return {
    value,
    setValue,
    isEmpty,
    isValid,
    error: { show: showError, message: errorMessage },
  };
};

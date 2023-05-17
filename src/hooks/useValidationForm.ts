import { useLayoutEffect, useState } from "react";

interface Props {
  isValidInputs: boolean[];
}

export const useValidationForm = ({ isValidInputs }: Props) => {
  const [isValidForm, setIsValidForm] = useState(false);

  useLayoutEffect(() => {
    setIsValidForm(!isValidInputs.includes(false));
  }, [...isValidInputs]);

  return isValidForm;
};

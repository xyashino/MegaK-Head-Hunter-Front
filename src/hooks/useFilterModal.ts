import React, { useState } from "react";

type ButtonConfig = {
  [key: string]: {
    text: string;
  };
};

type ButtonActiveState = {
  [key: string]: boolean;
};

export const useFilterModal = () => {
  const [isTheButtonActive, setIsTheButtonActive] = useState<ButtonActiveState>(
    {
      remote: false,
      office: false,
      permanent: false,
      beToBe: false,
      mandate: false,
      contract: false,
    }
  );

  const [monthsOfExperience, setMonthsOfExperience] = useState<number>(0);

  const [rating, setRating] = useState<{
    course: number | null;
    engagement: number | null;
    project: number | null;
    scrum: number | null;
  }>({ course: null, engagement: null, project: null, scrum: null });

  const [isChecked, setIsChecked] = useState<number>(0);

  const [salary, setSalary] = useState<{ min: string; max: string }>({
    min: "",
    max: "",
  });

  const setDefaultValues = (obj: any, defaultValue: any) => {
    return {
      ...obj,
      ...Object.fromEntries(Object.keys(obj).map((key) => [key, defaultValue])),
    };
  };

  const clearAllOptions = () => {
    setIsTheButtonActive((prev) => ({ ...setDefaultValues(prev, false) }));
    setMonthsOfExperience(0);
    setIsChecked(0);
    setSalary((prev) => ({ ...setDefaultValues(prev, "") }));
    setRating((prev) => ({ ...setDefaultValues(prev, "") }));
  };

  const typeOfContractButtons = [
    {
      text: "Umowa o pracę",
      isActive: isTheButtonActive.permanent,
      onClick: () =>
        setIsTheButtonActive((prev) => ({
          ...prev,
          permanent: !prev.permanent,
        })),
    },
    {
      text: "B2B",
      isActive: isTheButtonActive.beToBe,
      onClick: () =>
        setIsTheButtonActive((prev) => ({ ...prev, beToBe: !prev.beToBe })),
    },
    {
      text: "Umowa zlecenie",
      isActive: isTheButtonActive.mandate,
      onClick: () =>
        setIsTheButtonActive((prev) => ({ ...prev, mandate: !prev.mandate })),
    },
    {
      text: "Umowa o dzieło",
      isActive: isTheButtonActive.contract,
      onClick: () =>
        setIsTheButtonActive((prev) => ({ ...prev, contract: !prev.contract })),
    },
  ];

  const ratings = [
    {
      label: "Ocena przejścia kursu",
      rating: rating.course,
      setRating: (newRating: number) =>
        setRating({ ...rating, course: newRating }),
    },
    {
      label: "Ocena aktywności i zaangażowania na kursie",
      rating: rating.engagement,
      setRating: (newRating: number) =>
        setRating({ ...rating, engagement: newRating }),
    },
    {
      label: "Ocena kodu w projekcie własnym",
      rating: rating.project,
      setRating: (newRating: number) =>
        setRating({ ...rating, project: newRating }),
    },
    {
      label: "Ocena pracy w zespole w Scrum",
      rating: rating.scrum,
      setRating: (newRating: number) =>
        setRating({ ...rating, scrum: newRating }),
    },
  ];

  const buttonConfig: ButtonConfig = {
    remote: {
      text: "Praca zdalna",
    },
    office: {
      text: "Praca w biurze",
    },
  };

  return {
    isTheButtonActive,
    setIsTheButtonActive,
    monthsOfExperience,
    setMonthsOfExperience,
    rating,
    setRating,
    isChecked,
    setIsChecked,
    salary,
    setSalary,
    clearAllOptions,
    typeOfContractButtons,
    ratings,
    buttonConfig,
  };
};

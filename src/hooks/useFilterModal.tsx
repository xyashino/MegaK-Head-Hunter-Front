import { useState } from "react";
import { RatingCategories, RatingCategory } from "../constants/rating";

type UseFilterModalProps = {
  isOpen: boolean;
  onRequestClose: () => void | Promise<void>;
  onConfirm: () => void | Promise<void>;
};

export const useFilterModal = ({ isOpen, onRequestClose, onConfirm }: UseFilterModalProps) => {
  const [ratingCategories, setRatingCategories] = useState<RatingCategory[]>(RatingCategories);

  const [isRemoteButtonActive, setIsRemoteButtonActive] = useState<boolean>(false);
  const [isOfficeButtonActive, setIsOfficeButtonActive] = useState<boolean>(false);
  const [isPermanentButtonActive, setIsPermanentButtonActive] = useState<boolean>(false);
  const [isBeToBeButtonActive, setIsBeToBeButtonActive] = useState<boolean>(false);
  const [isMandateButtonActive, setIsMandateButtonActive] = useState<boolean>(false);
  const [isContractButtonActive, setIsContractButtonActive] = useState<boolean>(false);

  const [monthsOfExperience, setMonthsOfExperience] = useState<number>(0);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [minSalary, setMinSalary] = useState<string>("");
  const [maxSalary, setMaxSalary] = useState<string>("");

  const clearAllOptions = () => {
    setIsRemoteButtonActive(false);
    setIsOfficeButtonActive(false);
    setIsPermanentButtonActive(false);
    setIsBeToBeButtonActive(false);
    setIsMandateButtonActive(false);
    setIsContractButtonActive(false);
    setMonthsOfExperience(0);
    setIsChecked(false);
    setMinSalary("");
    setMaxSalary("");
    setRatingCategories(RatingCategories);
  };

  return {
    ratingCategories,
    setRatingCategories,
    isRemoteButtonActive,
    setIsRemoteButtonActive,
    isOfficeButtonActive,
    setIsOfficeButtonActive,
    isPermanentButtonActive,
    setIsPermanentButtonActive,
    isBeToBeButtonActive,
    setIsBeToBeButtonActive,
    isMandateButtonActive,
    setIsMandateButtonActive,
    isContractButtonActive,
    setIsContractButtonActive,
    monthsOfExperience,
    setMonthsOfExperience,
    isChecked,
    setIsChecked,
    minSalary,
    setMinSalary,
    maxSalary,
    setMaxSalary,
    clearAllOptions,
    isOpen,
    onRequestClose,
    onConfirm,
  };
};

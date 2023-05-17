import { FilterData } from "../types/FilterData";
import { Rating } from "@enums/rating.enum";

export const DEFAULT_FILTER_DATA: FilterData = {
  salary: {
    min: "",
    max: "",
  },
  rating: [
    {
      name: Rating.scrum,
      value: null,
      label: "Ocena pracy w zespole w Scrum",
    },
    {
      name: Rating.course,
      value: null,
      label: "Ocena przejścia kursu",
    },
    {
      name: Rating.engagement,
      value: null,
      label: "Ocena aktywności i zaangażowania na kursie",
    },
    {
      name: Rating.project,
      value: null,
      label: "Ocena kodu w projekcie własnym",
    },
  ],
  typeWork: [
    {
      value: "Wyłącznie zdalnie",
      isActive: false,
    },
    {
      value: "Na miejscu",
      isActive: false,
    },
    {
      value: "Bez znaczenia",
      isActive: false,
    },
    {
      value: "Gotowość do przeprowadzki",
      isActive: false,
    },
    {
      value: "Hybrydowo",
      isActive: false,
    },
  ],
  canTakeApprenticeship: null,
  contract: [
    {
      value: "Tylko UoP",
      isActive: false,
    },
    {
      value: "Brak preferencji",
      isActive: false,
    },
    {
      value: "Możliwe UZ/UoD",
      isActive: false,
    },
    {
      value: "Hybrydowo",
      isActive: false,
    },
    {
      value: "Możliwe B2B",
      isActive: false,
    },
  ],
  monthOfExperience: null,
};

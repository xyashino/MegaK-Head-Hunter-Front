import React from "react";
import classes from "./../Dropdown/Dropdown.module.css";
import { DropdownContentRow } from "@components/DropdownContent/DropdownContentRow";
interface DropdownProps {
  isOpen: boolean;
  studentData: {
    courseCompletion: number;
    courseEngagement: number;
    projectDegree: number;
    teamProjectDegree: number;
    expectedTypeWork: string;
    targetWorkCity: string | null;
    expectedContractType: string;
    expectedSalary: number | null;
    canTakeApprenticeship: boolean;
    monthsOfCommercialExp: number;
  };
}

export const DropdownContent: React.FC<DropdownProps> = ({
  isOpen,
  studentData: {
    monthsOfCommercialExp,
    courseCompletion,
    courseEngagement,
    projectDegree,
    teamProjectDegree,
    expectedTypeWork,
    targetWorkCity,
    expectedContractType,
    expectedSalary,
    canTakeApprenticeship,
  },
}) => {
  let months = "miesięcy";
  if (monthsOfCommercialExp >= 2 && monthsOfCommercialExp <= 4)
    months = "miesiące";
  if (monthsOfCommercialExp === 1) months = "miesiąc";
  return (
    <>
      <div
        className={`${classes.dropdown_content} ${isOpen ? classes.dropdown_content_animated : ""}`}
      >
        <DropdownContentRow title="Ocena przejścia kursu">
          <b>{courseCompletion}</b> / 5
        </DropdownContentRow>
        <DropdownContentRow title="Ocena aktywności i zaangażowania na kursie">
          <b>{courseEngagement}</b> / 5
        </DropdownContentRow>
        <DropdownContentRow title="Ocena kodu w projekcie własnym">
          <b>{projectDegree}</b> / 5
        </DropdownContentRow>
        <DropdownContentRow title="Ocena pracy w zespole w Scrum">
          <b>{teamProjectDegree}</b> / 5
        </DropdownContentRow>
        <DropdownContentRow title="Preferowane miejsce pracy">
          <b>{expectedTypeWork ?? "BRAK"}</b>
        </DropdownContentRow>
        <DropdownContentRow title="Docelowe miasto, gdzie chce pracować kandydat">
          <b>{targetWorkCity ?? "BRAK"}</b>
        </DropdownContentRow>

        <DropdownContentRow title="Oczekiwany typ kontraktu">
          <b>{expectedContractType ?? "BRAK"}</b>
        </DropdownContentRow>
        <DropdownContentRow title="Oczekiwane wynagrodzenie miesięczne netto">
          <b>{expectedSalary ?? "BRAK"}</b>
        </DropdownContentRow>
        <DropdownContentRow title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">
          <b>{canTakeApprenticeship ? "TAK" : "NIE"}</b>
        </DropdownContentRow>
        <DropdownContentRow title="Komercyjne doświadczenie w programowaniu">
          <b>
            {monthsOfCommercialExp && monthsOfCommercialExp !== 0
              ? `${monthsOfCommercialExp} ${months}`
              : "BRAK"}
          </b>
        </DropdownContentRow>
      </div>
    </>
  );
};

import React, { ReactNode, useCallback, useState } from "react";
import classes from "./../Dropdown/Dropdown.module.css";
import arrow_down from "@assets/arrow_down.svg";

type OptionalData = ReactNode | ReactNode[] | string;

interface DropdownProps { 
  courseAssessment: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: string;
  targetWorkCity: string | null;
  expectedContractType: string;
  expectedSalary: number | null;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
}

export const DropdownContent: React.FC<DropdownProps & { isOpen: boolean }> = ({
  isOpen,
  courseAssessment,
  courseEngagement,
  projectDegree,
  teamProjectDegree,
  expectedTypeWork,
  targetWorkCity,
  expectedContractType,
  expectedSalary,
  canTakeApprenticeship,
  monthsOfCommercialExp,
}) => {
  let months = "miesięcy";

  if (monthsOfCommercialExp >= 2 && monthsOfCommercialExp <= 4)
    months = "miesiące";

  if (monthsOfCommercialExp === 1) months = "miesiąc";
  return (
    <>
      <div
        className={`${classes.dropdown_content} ${
          isOpen ? classes.dropdown_content_animated : ""
        }`}
      >
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Ocena przejścia kursu
          </div>
          <div className={classes.dropdown_row_data}>
            <b>{courseAssessment}</b> / 5
          </div>
        </div>
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Ocena aktywności i zaangażowania na kursie
          </div>
          <div className={classes.dropdown_row_data}>
            <b>{courseEngagement}</b> / 5
          </div>
        </div>
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Ocena kodu w projekcie własnym
          </div>
          <div className={classes.dropdown_row_data}>
            <b>{projectDegree}</b> / 5
          </div>
        </div>
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Ocena pracy w zespole w Scrum
          </div>
          <div className={classes.dropdown_row_data}>
            <b>{teamProjectDegree}</b> / 5
          </div>
        </div>
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Preferowane miejsce pracy
          </div>
          <div className={classes.dropdown_row_data}>
            <b>{expectedTypeWork}</b>
          </div>
        </div>
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Docelowe miasto, gdzie chce pracować kandydat
          </div>
          <div className={classes.dropdown_row_data}>
            <b>{targetWorkCity}</b>
          </div>
        </div>
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Oczekiwany typ kontraktu
          </div>
          <div className={classes.dropdown_row_data}>
            <b>{expectedContractType}</b>
          </div>
        </div>
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Oczekiwane wynagrodzenie miesięczne netto
          </div>
          <div className={classes.dropdown_row_data}>
            <b>{expectedSalary} zł</b>
          </div>
        </div>
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Zgoda na odbycie bezpłatnych praktyk/stażu na początek
          </div>
          <div className={classes.dropdown_row_data}>
            <b>{canTakeApprenticeship ? "TAK" : "NIE"}</b>
          </div>
        </div>
        <div className={classes.dropdown_row}>
          <div className={classes.dropdown_row_title}>
            Komercyjne doświadczenie w programowaniu
          </div>
          <div className={classes.dropdown_row_data}>
            <b>
              {monthsOfCommercialExp} {months}
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

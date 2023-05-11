import React, { ReactNode, useCallback, useState } from "react";
import classes from "./Dropdown.module.css";
import arrow_down from "@assets/arrow_down.svg";

type OptionalData = ReactNode | ReactNode[] | string;

interface DropdownProps {
  // children: OptionalData;
  firstOptionalBtn?: OptionalData;
  secondOptionalBtn?: OptionalData;
  reservationData?: OptionalData;
  userNameData?: OptionalData;
  userNameAvatarData?: OptionalData;
  thirdOptionalBtn?: OptionalData;
  courseAssessment?: OptionalData;
  courseEngagement?: OptionalData;
  projectDegree?: OptionalData;
  teamProjectDegree?: OptionalData;
  expectedTypeWork?: OptionalData;
  targetWorkCity?: OptionalData;
  expectedContractType?: OptionalData;
  expectedSalary?: OptionalData;
  canTakeApprenticeship?: OptionalData;
  monthsOfCommercialExp?: OptionalData;
}

export const Dropdown: React.FC<DropdownProps> = ({
  firstOptionalBtn,
  secondOptionalBtn,
  reservationData,
  userNameAvatarData,
  userNameData,
  thirdOptionalBtn,
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);
  return (
    <>
      <div className={classes.dropdown_container}>
        <div className={classes.user_info}>
          <div className={classes.hidden}>{reservationData}</div>
          {userNameAvatarData}
          {userNameData}
        </div>
        <div className={classes.buttons_row}>
          <div className={classes.hidden}>
            {firstOptionalBtn}
            {secondOptionalBtn}
            {thirdOptionalBtn}
          </div>
          <button className={classes.dropdown_button}>
            {isOpen ? (
              <>
                <img
                  src={arrow_down}
                  className={classes.icon}
                  onClick={toggleDropdown}
                  alt="Strzałka w dół - rozwiń zawartość"
                  draggable={false}
                />
              </>
            ) : (
              <>
                <img
                  src={arrow_down}
                  className={`${classes.icon} ${classes.icon_animated}`}
                  onClick={toggleDropdown}
                  alt="Strzałka w górę - ukryj zawartość"
                  draggable={false}
                />
              </>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`${classes.dropdown_content} ${
            isOpen ? classes.dropdown_content_animated : ""
          }`}
        >
          {courseAssessment ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Ocena przejścia kursu
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{courseAssessment}</b> / 5
              </div>
            </div>
          ) : null}
          {courseEngagement ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Ocena aktywności i zaangażowania na kursie
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{courseEngagement}</b> / 5
              </div>
            </div>
          ) : null}
          {projectDegree ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Ocena kodu w projekcie własnym
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{projectDegree}</b> / 5
              </div>
            </div>
          ) : null}
          {teamProjectDegree ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Ocena pracy w zespole w Scrum
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{teamProjectDegree}</b> / 5
              </div>
            </div>
          ) : null}

          {expectedTypeWork ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Preferowane miejsce pracy
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{expectedTypeWork}</b>
              </div>
            </div>
          ) : null}
          {targetWorkCity ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Docelowe miasto, gdzie chce pracować kandydat
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{targetWorkCity}</b>
              </div>
            </div>
          ) : null}
          {expectedContractType ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Oczekiwany typ kontraktu
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{expectedContractType}</b>
              </div>
            </div>
          ) : null}
          {expectedSalary ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Oczekiwane wynagrodzenie miesięczne netto
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{expectedSalary} zł</b>
              </div>
            </div>
          ) : null}
          {canTakeApprenticeship ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Zgoda na odbycie bezpłatnych praktyk/stażu na początek
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{canTakeApprenticeship}</b>
              </div>
            </div>
          ) : null}
          {monthsOfCommercialExp ? (
            <div className={classes.dropdown_row}>
              <div className={classes.dropdown_row_title}>
                Komercyjne doświadczenie w programowaniu
              </div>
              <div className={classes.dropdown_row_data}>
                <b>{monthsOfCommercialExp}</b>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

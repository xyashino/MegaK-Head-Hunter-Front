import React, { ReactNode, useCallback, useState } from "react";
import classes from "./Dropdown.module.css";
import arrow_down from "@assets/arrow_down.svg";
import { DropdownContent } from "@components/DropdownContent/DropdownContent";

type OptionalData = ReactNode | ReactNode[] | string;

interface DropdownProps {
  firstOptionalBtn?: OptionalData;
  secondOptionalBtn?: OptionalData;
  reservationData?: OptionalData;
  userNameData: OptionalData;
  userNameAvatarData?: OptionalData;
  thirdOptionalBtn?: OptionalData;
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

  let months = "miesięcy";

  if (monthsOfCommercialExp >= 2 && monthsOfCommercialExp <= 4)
    months = "miesiące";

  if (monthsOfCommercialExp === 1) months = "miesiąc";

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
        <DropdownContent
          isOpen={isOpen}
          courseAssessment={courseAssessment}
          courseEngagement={courseEngagement}
          projectDegree={projectDegree}
          teamProjectDegree={teamProjectDegree}
          expectedTypeWork={expectedTypeWork}
          targetWorkCity={targetWorkCity}
          expectedContractType={expectedContractType}
          expectedSalary={expectedSalary}
          canTakeApprenticeship={canTakeApprenticeship}
          monthsOfCommercialExp={monthsOfCommercialExp}
        />
      )}
    </>
  );
};

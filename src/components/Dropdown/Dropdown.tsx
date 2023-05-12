import React, { ReactNode, useCallback, useState } from "react";
import classes from "./Dropdown.module.css";
import arrow_down from "@assets/arrow_down.svg";
import { DropdownContent } from "@components/DropdownContent/DropdownContent";
import { Text } from "@componentsCommon/Text/Text";
import { Avatar } from "@componentsCommon/Avatar/Avatar";

type OptionalData = ReactNode | ReactNode[] | string;

interface DropdownProps {
  firstOptionalBtn?: OptionalData;
  secondOptionalBtn?: OptionalData;
  reservation?: string;
  userName: string;
  githubUsername?: string;
  thirdOptionalBtn?: OptionalData;
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

export const Dropdown: React.FC<DropdownProps> = ({
  firstOptionalBtn,
  secondOptionalBtn,
  reservation,
  githubUsername,
  userName,
  thirdOptionalBtn,
  studentData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <>
      <div className={classes.dropdown_container}>
        <div className={classes.user_info}>
          <div className={classes.hidden}>
            {reservation && (
                <Text>
                  Rezerwacja do <br />
                  {new Date(reservation).toLocaleDateString()}
                </Text>
            )}
          </div>
          {githubUsername && <Avatar githubUsername={githubUsername} />}
          <Text>{userName}</Text>
        </div>
        <div className={classes.buttons_row}>
          <div className={classes.hidden}>
            {firstOptionalBtn}
            {secondOptionalBtn}
            {thirdOptionalBtn}
          </div>
          <button className={classes.dropdown_button} onClick={toggleDropdown}>
            <img
              src={arrow_down}
              className={`${classes.icon} ${isOpen && classes.icon_animated}`}
              alt="Strzałka w dół - rozwiń zawartość"
              draggable={false}
            />
          </button>
        </div>
      </div>
      {isOpen && <DropdownContent isOpen={isOpen} studentData={studentData} />}
    </>
  );
};

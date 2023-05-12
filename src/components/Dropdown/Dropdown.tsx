import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Dropdown.module.css";
import arrow_down from "@assets/arrow_down.svg";
import { DropdownContent } from "@components/DropdownContent/DropdownContent";
import { Text } from "@componentsCommon/Text/Text";
import { Avatar } from "@componentsCommon/Avatar/Avatar";
import { Button } from "@componentsCommon/Button/Button";
import { PageRouter } from "@enums/page-router.enum";
import { RemoveInterviewButton } from "@components/RemoveInterviewButton/RemoveInterviewButton";
import { HiredButton } from "@components/HiredButton/HiredButton";

interface DropdownProps {
  isTalks?: true;
  id: string;
  reservation?: string;
  userName: string;
  githubUsername?: string;
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
  isTalks,
  id,
  reservation,
  githubUsername,
  userName,
  studentData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
            {isTalks ? (
              <>
                <Button onClick={() => navigate(`${PageRouter.GetCv}${id}`)}>
                  Pokaż CV
                </Button>
                <RemoveInterviewButton id={id} />
                <HiredButton id={id} />
              </>
            ) : (
              <Button>Zarezerwuj rozmowę</Button>
            )}
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

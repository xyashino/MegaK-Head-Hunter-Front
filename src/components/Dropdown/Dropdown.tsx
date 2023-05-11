import React, { ReactNode, useCallback, useState } from "react";
import classes from "./Dropdown.module.css";
import arrow_down from "@assets/arrow_down.svg";

type OptionalData = ReactNode | ReactNode[] | string;

interface DropdownProps {
  children: OptionalData;
  firstOptionalBtn?: OptionalData;
  secondOptionalBtn?: OptionalData;
  reservationData?: OptionalData;
  userNameData?: OptionalData;
  userNameAvatarData?: OptionalData;
  thirdOptionalBtn?: OptionalData;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  firstOptionalBtn,
  secondOptionalBtn,
  reservationData,
  userNameAvatarData,
  userNameData,
  thirdOptionalBtn,
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
          {children}
        </div>
      )}
    </>
  );
};

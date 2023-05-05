import React, { useState } from "react";
import classes from "./Dropdown.module.css";

interface DropdownProps {
  children: string | JSX.Element | JSX.Element[];
  firstOptionalBtn?: string | JSX.Element | JSX.Element[];
  secondOptionalBtn?: string | JSX.Element | JSX.Element[];
  reservationData?: string | JSX.Element | JSX.Element[];
  userNameData?: string | JSX.Element | JSX.Element[];
  userNameAvatarData?: string | JSX.Element | JSX.Element[];
  thirdOptionalBtn?: string | JSX.Element | JSX.Element[];
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
                  src="./arrow_down.svg"
                  className={classes.icon}
                  onClick={toggleDropdown}
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  src="./arrow_down.svg"
                  className={classes.icon}
                  style={{ transform: "rotate(180deg)" }}
                  onClick={toggleDropdown}
                  alt=""
                />
              </>
            )}
          </button>
        </div>
      </div>
      {isOpen && <div className={classes.dropdown_content}>{children}</div>}
    </>
  );
};

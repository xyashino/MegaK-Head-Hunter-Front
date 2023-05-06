import React, { ReactNode, useCallback, useState } from "react";
import classes from "./Dropdown.module.css";

interface DropdownProps {
  children: ReactNode | ReactNode[] | string;
  firstOptionalBtn?: ReactNode | ReactNode[] | string;
  secondOptionalBtn?: ReactNode | ReactNode[] | string;
  reservationData?: ReactNode | ReactNode[] | string;
  userNameData?: ReactNode | ReactNode[] | string;
  userNameAvatarData?: ReactNode | ReactNode[] | string;
  thirdOptionalBtn?: ReactNode | ReactNode[] | string;
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
                  src="./arrow_down.svg"
                  className={classes.icon}
                  onClick={toggleDropdown}
                  alt="collapse"
                />
              </>
            ) : (
              <>
                <img
                  src="./arrow_down.svg"
                  className={classes.icon}
                  style={{ transform: "rotate(180deg)" }}
                  onClick={toggleDropdown}
                  alt="expand"
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

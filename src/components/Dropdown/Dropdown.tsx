import React, { useState } from "react";
import classes from "./Dropdown.module.css";

interface DropdownProps {
  title?: string | JSX.Element | JSX.Element[];
  children: string | JSX.Element | JSX.Element[];
}

export const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={classes.dropdown_container}>
        <div className={classes.user_info}></div>
        <div className={classes.buttons_row}>
          <button className={classes.dropdown_button} onClick={toggleDropdown}>
            {title}
          </button>
        </div>
      </div>
      {isOpen && <div className={classes.dropdown_content}>{children}</div>}
    </>
  );
};

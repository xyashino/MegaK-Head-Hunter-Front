import React, { useState } from "react";
import classes from "./Dropdown.module.css";

interface DropdownProps {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}

export const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.dropdown_container}>
      <button className={classes.dropdown_button} onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && <div className={classes.dropdown_content}>{children}</div>}
    </div>
  );
};

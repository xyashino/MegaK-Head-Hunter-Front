import React, { useState } from "react";

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
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

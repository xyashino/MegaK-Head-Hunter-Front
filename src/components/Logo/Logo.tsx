import React from "react";
import './Logo.css';
import img from "@assets/logo.png"

export const Logo = () => {
  return (
    <div className="div-img-wrapper">
      <img className="img-logo" src={img} alt="Logo kursu MegaK" />
    </div>
  );
};

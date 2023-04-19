import React from "react";
import './Image.css';
import img from "@assets/logo.png"

export const Image = () => {
  return (
    <div className="div-img-wrapper">
      <img className="img-logo" src={img} alt="Logo kursu MegaK" />
    </div>
  );
};

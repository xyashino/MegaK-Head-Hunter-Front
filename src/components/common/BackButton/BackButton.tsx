import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import classes from "./BackButton.module.css";

interface Props {
  to?: PageRouter;
}

export const BackButton = ({ to }: Props) => {
  const navigate = useNavigate();

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    if (to) return navigate(to);
    return navigate(-1);
  };

  return (
    <button onClick={handleClick} className={classes.back_button} type="button" >
      <span className={`material-icons`} style={{ color: "#9e9e9e" }}>
        arrow_back_ios
      </span>
      Wróć
    </button>
  );
};

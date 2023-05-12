import React, { SyntheticEvent } from "react";
import classes from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import { Button } from "@componentsCommon/Button/Button";

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
    <div className={classes.back}>
      <Button status="disabled" onClick={handleClick}>
        <span className="material-icons" style={{ color: "#9e9e9e" }}>
          arrow_back_ios
        </span>
        Wróć
      </Button>
    </div>
  );
};

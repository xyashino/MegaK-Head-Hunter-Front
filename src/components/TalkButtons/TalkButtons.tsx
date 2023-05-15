import { Button } from "@componentsCommon/Button/Button";
import { PageRouter } from "@enums/page-router.enum";
import { HiredButton } from "@components/DropdownButtons/HiredButton";
import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { RemoveInterviewButton } from "@components/DropdownButtons/RemoveInterviewButton";
import classes from "./TalkButtons.module.css";

interface Props {
  id: string;
}

export const TalkButtons = ({ id }: Props) => {
  const navigate = useNavigate();
  const navigateToMain = (e: SyntheticEvent) =>{
      e.preventDefault();
      navigate(`${PageRouter.GetCv}${id}`);
  }
  return (
    <>
      <Button onClick={navigateToMain} customClasses={classes.button}>Pokaż CV</Button>
      <RemoveInterviewButton studentId={id} customClasses={classes.button}/>
      <HiredButton studentId={id} customClasses={classes.button} />
    </>
  );
};

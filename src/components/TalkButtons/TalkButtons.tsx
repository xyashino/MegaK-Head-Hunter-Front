import { Button } from "@componentsCommon/Button/Button";
import { PageRouter } from "@enums/page-router.enum";
import { HiredButton } from "@components/HiredButton/HiredButton";
import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { RemoveInterviewButton } from "@components/InterviewButton/RemoveInterviewButton";

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
      <Button onClick={navigateToMain}>Pokaż CV</Button>
      <RemoveInterviewButton studentId={id}/>
      <HiredButton studentId={id}/>
    </>
  );
};

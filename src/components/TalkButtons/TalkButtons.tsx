import { Button } from "@componentsCommon/Button/Button";
import { PageRouter } from "@enums/page-router.enum";
import { HiredButton } from "@components/HiredButton/HiredButton";
import React from "react";
import {useNavigate} from "react-router-dom";
import {RemoveInterviewButton} from "@components/InterviewButton/RemoveInterviewButton";

interface Props {
    id:string;
}

export const TalkButtons = ({id}:Props) => {
    const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(`${PageRouter.GetCv}${id}`)}>
        Pokaż CV
      </Button>
      <RemoveInterviewButton id={id} />
      <HiredButton id={id} />
    </>
  );
};

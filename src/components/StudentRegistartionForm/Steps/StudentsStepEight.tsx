import React, {
  SyntheticEvent,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { TextArea } from "@componentsCommon/TextArea/TextArea";
import { Button } from "@componentsCommon/Button/Button";
import { Text } from "@componentsCommon/Text/Text";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import classes from "../StudentRegistrationForm.module.css";
import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { useNavigate, useParams } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import {processStudentData} from "@utils/procesStudentData";
import {toast} from "react-hot-toast";

export const StudentsStepEight = () => {
  const { studentData, setStudentData } = useContext(
    StudentRegistrationContext
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchData } = useAxios({
    body: processStudentData(studentData),
    url: `${RequestPath.CreateStudent}${id}`,
    method: "POST",
  });

  const [experience, setExperience] = useState(studentData.workExperience);
  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetchData(() => {
      toast['success']("Aktywowano konto");
      navigate(PageRouter.Main);
    });
  };

  useLayoutEffect(() => {
    setStudentData((prevState) => ({
      ...prevState,
      workExperience: experience,
    }));
  }, [experience]);

  const handleInputChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value } = e.target as HTMLTextAreaElement;
    setExperience(value);
  };

  return (
    <>
      <TextArea
        description="Przebieg doświadczenia zawodowego"
        onChange={handleInputChange}
      />
      <Button customClasses={classes.activate_btn}>
        <Text weight="bold" onClick={handleClick}>
          Aktywuj konto
        </Text>
      </Button>
    </>
  );
};

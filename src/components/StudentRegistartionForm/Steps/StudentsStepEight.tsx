import React,{SyntheticEvent, useContext, useLayoutEffect, useState} from "react";
import { TextArea } from "@components/TextArea/TextArea";
import { Button } from "@components/Button/Button";
import { Text } from "@components/Text/Text";
import { StudentRegistrationContext } from "@context/StudentRegistrationContext";
import classes from "../StudentRegistrationForm.module.css";
export const StudentsStepEight = () => {
  const { studentData,setStudentData } = useContext(StudentRegistrationContext);

  const [experience ,setExperience] = useState(studentData.workExperience)
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    // console.log(Object.keys(studentData).reduce((acc, k) => (!studentData[k] && delete acc[k], acc), studentData));
  };

  useLayoutEffect(()=>{
      setStudentData(prevState => ({...prevState,workExperience:experience}))
  },[experience])

  const handleInputChange = (e:SyntheticEvent)=>{
      e.preventDefault();
      const {value} = e.target as HTMLTextAreaElement;
      setExperience(value)
  }

  return (
    <>
      <TextArea description="Przebieg doświadczenia zawodowego" onChange={handleInputChange}/>
      <Button customClasses={classes.activate_btn}>
        <Text weight="bold" onClick={handleClick}>
          Aktywuj konto
        </Text>
      </Button>
    </>
  );
};

import { useOutletContext } from "react-router-dom";
import React, { SyntheticEvent, useLayoutEffect, useState } from "react";
import { StudentResponse } from "@backendTypes";
import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { Text } from "@components/Text/Text";
import { ContrastSection } from "@components/ContrastSection/ContrastSection";
import classes from "./EditCv.module.css";
import { Button } from "@components/Button/Button";
import { TextArea } from "@components/TextArea/TextArea";
import { UrlForm } from "@components/UrlForm/UrlForm";
import {AxiosSetup} from "@utils/network/AxiosSetup";
import {processStudentData} from "@utils/procesStudentData";
import {PersonalSection} from "@components/EditCvSections/PersonalSection";
import {GithubSection} from "@components/EditCvSections/GithubSection";
import {PreferenceSection} from "@components/EditCvSections/PreferenceSection";

type UpdateStudentData = Omit<
  StudentResponse,
  | "courseEngagement"
  | "courseCompletion"
  | "isActive"
  | "email"
  | "bonusProjectUrls"
  | "teamProjectDegree"
  | "userId"
  | "projectDegree"
>

export const EditCv = () => {
  const { id } = useOutletContext() as { id: string };
  const { fetchData, loading } = useAxios({
    method: "GET",
    url: `${RequestPath.GetOneStudent}${id}`,
  });
  const [studentData, setStudentData] = useState<UpdateStudentData>({
      bio: null,
      canTakeApprenticeship: false,
      education: null,
      expectedContractType: "",
      expectedSalary: null,
      expectedTypeWork: "",
      firstname: "",
      githubUsername: "",
      id: "",
      lastname: "",
      monthsOfCommercialExp: 0,
      portfolioUrls: [],
      projectUrls: [],
      targetWorkCity: null,
      tel: null,
      workExperience: null,
      courses:""
  });

  useLayoutEffect(() => {
    (async () => {
      const {
        courseEngagement,
        courseCompletion,
        isActive,
        email,
        bonusProjectUrls,
        teamProjectDegree,
        userId,
        projectDegree,
        ...studentData
      } = (await fetchData()) as StudentResponse;
      setStudentData(studentData);
    })();
  }, []);

  if (loading) return <Text>Wczytywanie...</Text>;

  const updateValue = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value, name } = e.target as HTMLInputElement;
    if (name === "monthsOfCommercialExp") {
      if (Number(value) < 0 || Number(value) > 100) return;
      setStudentData((prevState) => ({ ...prevState, [name]: +value }));
      return;
    }
    setStudentData((prevState) => ({ ...prevState, [name]: value }));
  };

  const updateToggle = (canTakeApprenticeship: boolean) => {
    setStudentData((prevState) => ({
      ...prevState,
      canTakeApprenticeship,
    }));
  };

  const addUrlPortfolio = (portfolioUrls:string[]) =>{
      setStudentData((prevState) => ({
          ...prevState,
          portfolioUrls,
      }));
  }

    const addUrlProject = (projectUrls:string[]) =>{
        setStudentData((prevState) => ({
            ...prevState,
            projectUrls,
        }));
    }


    const uploadData =async (e:SyntheticEvent)=> {
      e.preventDefault();
      const {id, ...rest}=studentData
      await AxiosSetup.patch(`${RequestPath.GetOneStudent}${id}`, processStudentData(rest as any))
    }

  return (
    <div className={classes.edit_cv}>
      <Button onClick={uploadData}>Zapisz Zmiany</Button>

      <PersonalSection
        tel={{ defaultValue: studentData.tel ?? "", name: "tel" }}
        firstname={{
          defaultValue: studentData.firstname ?? "",
          name: "firstname",
        }}
        lastname={{
          defaultValue: studentData.lastname ?? "",
          name: "lastname",
        }}
        onChange={updateValue}
      />

      <GithubSection
        githubUsername={{
          defaultValue: studentData.githubUsername ?? "",
          name: "githubUsername",
        }}
        onChange={updateValue}
      />

      <PreferenceSection
        expectedTypeWork={{
          defaultValue: studentData.expectedTypeWork ?? "",
          name: "expectedTypeWork",
        }}
        expectedContractType={{
          defaultValue: studentData.expectedContractType ?? "",
          name: "expectedContractType",
        }}
        monthsOfCommercialExp={{
          defaultValue: `${studentData.monthsOfCommercialExp ?? 0}`,
          name: "monthsOfCommercialExp",
        }}
        targetWorkCity={{
          defaultValue: studentData.targetWorkCity ?? "",
          name: "targetWorkCity",
        }}

        expectedSalary={{
            defaultValue: `${(studentData.expectedSalary ?? "")}`,
            name: "expectedSalary",
        }}
        toggle={{
          defaultValue: studentData.canTakeApprenticeship,
          updateToggle,
        }}
        onChange={updateValue}
      />

      <ContrastSection title="Bio">
        <TextArea
          value={studentData.bio ?? ""}
          name="bio"
          onChange={updateValue}
        />
      </ContrastSection>

      <ContrastSection title="Edukacja">
        <TextArea
          value={studentData.education ?? ""}
          name="education"
          onChange={updateValue}
        />
      </ContrastSection>

      <ContrastSection title="Kursy">
        <TextArea value={studentData.courses ?? ''} name="courses" onChange={updateValue} />
      </ContrastSection>

      <ContrastSection title="Doświadczenie zawodowe">
        <TextArea
          value={studentData.workExperience ?? ""}
          name="workExperience"
          onChange={updateValue}
        />
      </ContrastSection>

      <ContrastSection title="Portfolio">
        <UrlForm urlArray={studentData.portfolioUrls ?? []} updateState={addUrlPortfolio} description='Dodaj link portfolio'/>
      </ContrastSection>

      <ContrastSection title="Linki do Projektów">
        <UrlForm urlArray={studentData.projectUrls ?? []} updateState={addUrlProject} description='Dodaj link projektu'/>
      </ContrastSection>
    </div>
  );
};

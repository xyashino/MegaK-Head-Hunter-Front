import { useOutletContext } from "react-router-dom";
import React, { SyntheticEvent, useLayoutEffect, useState } from "react";
import { StudentResponse } from "@backendTypes";
import { useAxios } from "@hooks/useAxios";
import { RequestPath } from "@enums/request-path.enum";
import { Text } from "@componentsCommon/Text/Text";
import classes from "./EditCvPage.module.css";
import { Button } from "@componentsCommon/Button/Button";
import { TextArea } from "@componentsCommon/TextArea/TextArea";
import { UrlForm } from "@components/UrlForm/UrlForm";
import { AxiosSetup } from "@utils/network/AxiosSetup";
import { processStudentData } from "@utils/procesStudentData";
import { PersonalSection } from "@components/EditCvSections/PersonalSection";
import { GithubSection } from "@components/EditCvSections/GithubSection";
import { PreferenceSection } from "@components/EditCvSections/PreferenceSection";
import { isAxiosError } from "axios";
import { toast } from "react-hot-toast";
import { UpdateStudentData } from "../../types/UpdateStudentData";
import { UpdateOptionName } from "@enums/option-name.enum";
import { ContrastSection } from "@components/EditCvSections/ContrastSection";
import { DEFAULT_UPDATE_STUDENT_DATA } from "@constants/DefaultUpdateStudentData";
export const EditCvPage = () => {
  const { id } = useOutletContext() as { id: string };
  const { fetchData, loading } = useAxios({
    method: "GET",
    url: `${RequestPath.GetOneStudent}${id}`,
  });
  const [studentData, setStudentData] = useState<UpdateStudentData>(
    DEFAULT_UPDATE_STUDENT_DATA
  );

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
    if (name === UpdateOptionName.MonthsOfExp) {
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

  const addUrlPortfolio = (portfolioUrls: string[]) => {
    setStudentData((prevState) => ({
      ...prevState,
      portfolioUrls,
    }));
  };

  const addUrlProject = (projectUrls: string[]) => {
    setStudentData((prevState) => ({
      ...prevState,
      projectUrls,
    }));
  };

  const uploadData = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { id, ...rest } = studentData;
    try {
      await AxiosSetup.patch(
        `${RequestPath.GetOneStudent}${id}`,
        processStudentData(rest as any)
      );
    } catch (e) {
      let message = "Unknown Error";
      if (isAxiosError(e)) {
        message =
          e.response?.data.message ?? e.response?.data.error ?? e.message;
      }
      toast["error"](Array.isArray(message) ? message.join("\n") : message);
    } finally {
      toast["success"]("Zapisano zmiany");
    }
  };

  return (
    <div className={classes.edit_cv}>
      <Button onClick={uploadData}>Zapisz Zmiany</Button>

      <PersonalSection
        tel={{
          defaultValue: studentData.tel ?? "",
          name: UpdateOptionName.Tel,
        }}
        firstname={{
          defaultValue: studentData.firstname ?? "",
          name: UpdateOptionName.Firstname,
        }}
        lastname={{
          defaultValue: studentData.lastname ?? "",
          name: UpdateOptionName.Lastname,
        }}
        onChange={updateValue}
      />

      <GithubSection
        githubUsername={{
          defaultValue: studentData.githubUsername ?? "",
          name: UpdateOptionName.Github,
        }}
        onChange={updateValue}
      />

      <PreferenceSection
        expectedTypeWork={{
          defaultValue: studentData.expectedTypeWork ?? "",
          name: UpdateOptionName.TypeWork,
        }}
        expectedContractType={{
          defaultValue: studentData.expectedContractType ?? "",
          name: UpdateOptionName.ContractType,
        }}
        monthsOfCommercialExp={{
          defaultValue: `${studentData.monthsOfCommercialExp ?? 0}`,
          name: UpdateOptionName.MonthsOfExp,
        }}
        targetWorkCity={{
          defaultValue: studentData.targetWorkCity ?? "",
          name: UpdateOptionName.City,
        }}
        expectedSalary={{
          defaultValue: `${studentData.expectedSalary ?? ""}`,
          name: UpdateOptionName.Salary,
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
          name={UpdateOptionName.Bio}
          onChange={updateValue}
        />
      </ContrastSection>

      <ContrastSection title="Edukacja">
        <TextArea
          value={studentData.education ?? ""}
          name={UpdateOptionName.Education}
          onChange={updateValue}
        />
      </ContrastSection>

      <ContrastSection title="Kursy">
        <TextArea
          value={studentData.courses ?? ""}
          name={UpdateOptionName.Courses}
          onChange={updateValue}
        />
      </ContrastSection>

      <ContrastSection title="Doświadczenie zawodowe">
        <TextArea
          value={studentData.workExperience ?? ""}
          name={UpdateOptionName.Experience}
          onChange={updateValue}
        />
      </ContrastSection>

      <ContrastSection title="Portfolio">
        <UrlForm
          urlArray={studentData.portfolioUrls ?? []}
          updateState={addUrlPortfolio}
          description="Dodaj link portfolio"
        />
      </ContrastSection>

      <ContrastSection title="Linki do Projektów">
        <UrlForm
          urlArray={studentData.projectUrls ?? []}
          updateState={addUrlProject}
          description="Dodaj link projektu"
        />
      </ContrastSection>
    </div>
  );
};

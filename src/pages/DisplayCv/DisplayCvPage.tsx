import React from "react";
import { ActiveStudentResponse } from "@backendTypes";
import { ShowRating } from "@components/ShowRating/ShowRating";
import { StudentProfile } from "@components/StudentProfile/StudentProfile";
import { Text } from "@componentsCommon/Text/Text";
import { useLoaderData, useOutletContext } from "react-router-dom";
import classes from "./DisplayCvPage.module.css";
import { UrlContainer } from "@components/DisplayCvContainers/UrlCointainer";
import { RateContainer } from "@components/DisplayCvContainers/RateCointainer";
import { OutletData } from "../../types/OutletData";
import { BackButton } from "@componentsCommon/BackButton/BackButton";

export const DisplayCvPage = () => {
  const studentData = useLoaderData() as ActiveStudentResponse;
  const outletContext = useOutletContext() as OutletData;
  return (
    <div className={classes.container}>
      <BackButton />

      <StudentProfile
        fullName={`${studentData.firstname} ${studentData.lastname}`}
        ghUsername={studentData.githubUsername}
        phone={studentData.tel}
        mail={studentData.email}
        aboutMe={studentData.bio}
        showButtons={studentData.id !== outletContext.id}
        id={studentData.id}
      />

      <div className={classes.details}>
        <div className={classes.title_gutter}>Ocena</div>
        <div className={classes.content_gutter}>
          <ShowRating
            degree={studentData.courseCompletion}
            isStars
            paragraphText="Ocena przejścia kursu"
          />
          <ShowRating
            degree={studentData.courseEngagement}
            isStars
            paragraphText="Ocena aktywności i zaangażowania na kursie"
          />
          <ShowRating
            degree={studentData.projectDegree}
            isStars
            paragraphText="Ocena kodu w projekcie własnym"
          />
          <ShowRating
            degree={studentData.teamProjectDegree}
            isStars
            paragraphText="Ocena pracy w zespole w Scrum"
          />
        </div>
        <div className={classes.title_gutter}>
          Oczekiwania w stosunku do zatrudnienia
        </div>
        <div className={classes.content_gutter}>
          <RateContainer
            description="Preferowane miejsce pracy"
            value={studentData.expectedTypeWork}
          />

          <RateContainer
            description="Docelowe miasto, gdzie chce pracować kandydat"
            value={studentData.targetWorkCity ?? "BRAK"}
          />

          <RateContainer
            description="Oczekiwany typ kontraktu"
            value={studentData.expectedContractType}
          />

          <RateContainer
            description="Oczekiwane wynagordzenie miesięczne netto"
            value={`${studentData.expectedSalary ?? "BRAK"}`}
          />

          <RateContainer
            description="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
            value={studentData.canTakeApprenticeship ? "TAK" : "NIE"}
          />

          <RateContainer
            description="Komercyjne doświadczenie w programowaniu"
            value={
              studentData.monthsOfCommercialExp
                ? `${studentData.monthsOfCommercialExp} miesięcy`
                : "BRAK"
            }
          />
        </div>
        <div className={classes.title_gutter}>Edukacja</div>
        <Text customClasses={classes.content_gutter}>{studentData.education}</Text>
        <div className={classes.title_gutter}>Kursy</div>
        <Text customClasses={classes.content_gutter}>{studentData.courses}</Text>
        <div className={classes.title_gutter}>Doświadczenie zawodowe</div>
        <Text customClasses={classes.content_gutter}>
          {studentData.workExperience}
        </Text>
        <UrlContainer title="Portfolio" array={studentData.portfolioUrls} />
        <UrlContainer
          title="Projekt w zespole Scrumowym"
          array={studentData.bonusProjectUrls}
        />
        <UrlContainer
          title="Projekt na zaliczenie"
          array={studentData.projectUrls}
        />
      </div>
    </div>
  );
};

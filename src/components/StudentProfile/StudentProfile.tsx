import React from "react";
import githubIcon from "@assets/github.svg";
import mailIcon from "@assets/mail.svg";
import phoneIcon from "@assets/phone.svg";
import { Avatar } from "@componentsCommon/Avatar/Avatar";
import { LinkWithIcon } from "@components/LinkWithIcon/LinkWithIcon";
import { Text } from "@componentsCommon/Text/Text";
import classes from "./StudentProfile.module.css";
import { HiredButton } from "@components/DropdownButtons/HiredButton";
import { RemoveInterviewButton } from "@components/DropdownButtons/RemoveInterviewButton";
type Props = {
  fullName: string;
  ghUsername: string;
  phone: string | null;
  mail: string;
  aboutMe: string | null;
  showButtons: boolean;
  id: string;
};

const BASE_GH_URL = "https://github.com/";
export const StudentProfile = ({
  fullName,
  ghUsername,
  phone,
  mail,
  aboutMe,
  id,
  showButtons = false,
}: Props) => {
  return (
    <div className={classes.profile}>
      <Avatar type="large" githubUsername={ghUsername} />
      <h2 className={classes.name}>{fullName}</h2>
      <LinkWithIcon
        icon={githubIcon}
        text={ghUsername}
        to={`${BASE_GH_URL}${ghUsername}`}
      />
      <div className={classes.contact}>
        {phone && (
          <LinkWithIcon
            icon={phoneIcon}
            text={phone}
            to={"tel:" + phone}
            style={{ color: "white", marginBottom: "0.25rem" }}
          />
        )}

        <LinkWithIcon
          icon={mailIcon}
          text={mail}
          to={"mailto:" + phone}
          style={{ color: "white" }}
        />

        {aboutMe && (
          <>
            <Text
              style={{
                color: "grey",
                marginTop: "1.5rem",
              }}
            >
              O mnie
            </Text>
            <Text
              style={{
                color: "#f7f7f7",
                marginBottom: "1.5rem",
                fontWeight: "200",
              }}
            >
              {aboutMe}
            </Text>
          </>
        )}

        {showButtons && (
          <>
            <HiredButton studentId={id} customClasses={classes.button} />
            <RemoveInterviewButton
              studentId={id}
              navigateToMain
              customClasses={classes.button}
            />
          </>
        )}
      </div>
    </div>
  );
};

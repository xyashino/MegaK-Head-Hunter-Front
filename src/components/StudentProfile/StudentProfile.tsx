import React from "react";
import githubIcon from "@assets/github.svg";
import mailIcon from "@assets/mail.svg";
import phoneIcon from "@assets/phone.svg";
import { Avatar } from "@componentsCommon/Avatar/Avatar";
import { Button } from "@componentsCommon/Button/Button";
import { LinkWithIcon } from "@components/LinkWithIcon/LinkWithIcon";
import { Text } from "@componentsCommon/Text/Text";
import classes from "./StudentProfile.module.css";
type Props = {
  fullName: string;
  ghUsername: string;
  phone: string | null;
  mail: string;
  aboutMe: string | null;
  showButtons: boolean;
};

const BASE_GH_URL = "https://github.com/";

const Buttons = (
  <>
    <Button
      style={{
        width: "100%",
        marginBottom: "0.75rem",
      }}
    >
      Brak zainteresowania
    </Button>
    <Button style={{ width: "100%" }}>Zatrudniony</Button>
  </>
);

export const StudentProfile = ({
  fullName,
  ghUsername,
  phone,
  mail,
  aboutMe,
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

        {showButtons ? Buttons : undefined}
      </div>
    </div>
  );
};

import React from "react";
import { Avatar } from "@components/Avatar/Avatar";
import { LinkWithIcon } from "@components/LinkWithIcon/LinkWithIcon";
import { Button } from "@components/Button/Button";
import classes from "./StudentProfile.module.css";
import { Text } from "@components/Text/Text";
import githubIcon from "@assets/github.svg";
import mailIcon from "@assets/mail.svg";
import phoneIcon from "@assets/phone.svg";

type Props = {
  name: string;
  ghLink: string;
  phone: string;
  mail: string;
  aboutMe: string;
};

export const StudentProfile = ({
  name,
  ghLink,
  phone,
  mail,
  aboutMe,
}: Props) => {
  return (
    <div className={classes.profile}>
      <Avatar type="large" githubUsername="craftzdog" />
      <h2 className={classes.name}>{name}</h2>
      <LinkWithIcon icon={githubIcon} text={ghLink} to="https://megak.pl" />
      <div className={classes.contact}>
        <LinkWithIcon
          icon={phoneIcon}
          text={phone}
          to={"tel:" + phone}
        />
        <LinkWithIcon
          icon={mailIcon}
          text={mail}
          to={"tel:" + phone}
        />
        <Text 
          customClasses={classes.aboutMe}
        >
          O mnie
        </Text>
        <Text
        customClasses={classes.aboutMeDesc}
        >
          {aboutMe}
        </Text>
        <Button 
          customClasses={`${classes.button} ${classes.disinterest}`}
        >
          Brak zainteresowania
        </Button>
        <Button
          customClasses={classes.button}
        >
          Zatrudniony
        </Button>
      </div>
    </div>
  );
};

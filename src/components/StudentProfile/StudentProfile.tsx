import React from 'react';
import { Avatar } from '@components/Avatar/Avatar';
import { LinkWithIcon } from '@components/LinkWithIcon/LinkWithIcon';
import { Button } from '@components/Button/Button';
import classes from './StudentProfile.module.css';
import { Text } from '@components/Text/Text';

type Props = {
  name: string,
  ghLink: string,
  phone: string,
  mail: string,
  aboutMe: string,
}

 export const StudentProfile = ({
    name, 
    ghLink, 
    phone, 
    mail, 
    aboutMe
  }: Props) => {
  return (
    <div className={classes.profile}>
      <Avatar type="large" githubUsername="craftzdog" />
      <h2 className={classes.name}>{name}</h2>
      <LinkWithIcon icon={"./github.svg"} text={ghLink} to="https://megak.pl" />
      <div className={classes.contact}>
        <LinkWithIcon
          icon={"./phone.svg"}
          text={phone}
          to={"tel:" + phone}
          style={{ color: "white", marginBottom: "0.25rem" }}
        />
        <LinkWithIcon
          icon={"./mail.svg"}
          text={mail}
          to={"mailto:" + phone}
          style={{ color: "white" }}
        />
        <Text 
          style={{
            color: "grey", 
            marginTop: "1.5rem" 
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
        <Button 
          style={{ 
            width: "100%", 
            marginBottom: "0.75rem" 
          }}
        >
          Brak zainteresowania
        </Button>
        <Button style={{ width: "100%" }}>
          Zatrudniony
        </Button>
      </div>
    </div>
  )
 }
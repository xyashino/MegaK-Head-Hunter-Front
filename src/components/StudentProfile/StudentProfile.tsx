import React from 'react';
import { Avatar } from '@components/Avatar/Avatar';
import { LinkWithIcon } from '@components/LinkWithIcon/LinkWithIcon';
import { Button } from '@components/Button/Button';
import { Text } from '@components/Text/Text';
import classes from './StudentProfile.module.css';

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
      <LinkWithIcon icon={""} text={ghLink} to="https://megak.pl" />
      <div className={classes.contact}>
        <LinkWithIcon
          icon={"phone"}
          text={phone}
          to={"tel:" + phone}
        />
        <LinkWithIcon
          icon={"mail"}
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
  )
 }
import React, { SyntheticEvent } from "react";
import { Input } from "@componentsCommon/Input/Input";
import { ContrastSection } from "@components/EditCvSections/ContrastSection";
import classes from "./EditCvSections.module.css";
interface Props {
  tel: { defaultValue: string; name: string };
  firstname: { defaultValue: string; name: string };
  lastname: { defaultValue: string; name: string };
  onChange: (e: SyntheticEvent) => void;
}
export const PersonalSection = ({
  tel,
  firstname,
  lastname,
  onChange,
}: Props) => {
  return (
    <ContrastSection title="Dane Osobowe">
      <div className={classes.small}>
        <Input
          value={tel.defaultValue}
          description="Nr Telefonu"
          name={tel.name}
          onChange={onChange}
        />
      </div>
      <div className={classes.small}>
        <Input
          value={firstname.defaultValue}
          description="Imię"
          name={firstname.name}
          onChange={onChange}
        />
      </div>
      <div className={classes.small}>
        <Input
          value={lastname.defaultValue}
          description="Nazwisko"
          name={lastname.name}
          onChange={onChange}
        />
      </div>
    </ContrastSection>
  );
};

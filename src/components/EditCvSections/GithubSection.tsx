import classes from "./EditCvSections.module.css";
import { Input } from "@componentsCommon/Input/Input";
import React, { SyntheticEvent } from "react";
import { Avatar } from "@componentsCommon/Avatar/Avatar";
import { Text } from "@componentsCommon/Text/Text";
import {ContrastSection} from "@components/EditCvSections/ContrastSection";

interface Props {
  githubUsername: { defaultValue: string; name: string };
  onChange: (e: SyntheticEvent) => void;
}
export const GithubSection = ({ githubUsername, onChange }: Props) => {
  return (
    <ContrastSection title="Dane Github">
      <div className={classes.github_section}>
        <div className={classes.small}>
          <Input
            value={githubUsername.defaultValue}
            onChange={onChange}
            name={githubUsername.name}
            description="nazwa github"
          />
        </div>
          <div style={{minHeight:"160px"}}>
              <Avatar githubUsername={githubUsername.defaultValue} type="large" />

          </div>
        <Text weight='bold'>
          Kliknij{" "}
          <a
            href={`https://github.com/${githubUsername.defaultValue}`}
            target="_blank"
            rel="noreferrer"
          >
            TUTAJ
          </a>
        </Text>
      </div>
    </ContrastSection>
  );
};

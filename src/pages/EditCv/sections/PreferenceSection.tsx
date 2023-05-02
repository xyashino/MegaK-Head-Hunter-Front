import { Input } from "@components/Input/Input";
import { ContrastSection } from "@components/ContrastSection/ContrastSection";
import { Select } from "@components/Select/Select";
import {
  EXPECTED_CONTRACT_TYPE_OPTIONS,
  EXPECTED_TYPE_WORK_OPTIONS,
} from "@constants/SelectOptions";
import { Text } from "@components/Text/Text";
import { Toggle } from "@components/Toggle/Toggle";
import classes from "../EditCv.module.css";
import { SyntheticEvent } from "react";

interface Props {
  expectedContractType: { defaultValue: string; name: string };
  expectedTypeWork: { defaultValue: string; name: string };
  targetWorkCity: { defaultValue: string; name: string };
  monthsOfCommercialExp: { defaultValue: string; name: string };
    expectedSalary: { defaultValue: string; name: string };
  onChange: (e: SyntheticEvent) => void;
  toggle: {
    defaultValue: boolean;
    updateToggle: (e: boolean) => void;
  };
}
export const PreferenceSection = ({
  expectedContractType,
  expectedTypeWork,
  targetWorkCity,
  monthsOfCommercialExp,
  onChange,
                                      expectedSalary,
  toggle,
}: Props) => {
  return (
    <ContrastSection title="Oczekiwanie w stosunku do zatrudnienia:">
      <div className={classes.small}>
        <Select
          options={EXPECTED_CONTRACT_TYPE_OPTIONS}
          value={expectedContractType.defaultValue}
          description="Preferowany kontrakt"
          name={expectedContractType.name}
          onChange={onChange}
        />
      </div>
      <div className={classes.small}>
        <Select
          options={EXPECTED_TYPE_WORK_OPTIONS}
          value={expectedTypeWork.defaultValue}
          description="Typ pracy"
          name={expectedTypeWork.name}
          onChange={onChange}
        />
      </div>
      <div className={classes.small}>
        <Input
          value={targetWorkCity.defaultValue}
          description="Docelowe Misto"
          name={targetWorkCity.name}
          onChange={onChange}
        />
      </div>
      <div className={classes.small}>
        <Input
          value={monthsOfCommercialExp.defaultValue}
          description="Komercyjne Doświadczenie (MIESĄCE)"
          name={monthsOfCommercialExp.name}
          onChange={onChange}
          type="number"
        />
      </div>

        <div className={classes.small}>
            <Input
                value={expectedSalary.defaultValue}
                description="Preferowane Wynagrodznie"
                name={expectedSalary.name}
                onChange={onChange}
            />
        </div>

      <div className={classes.toggle_wrapper}>
        <Text weight='bold'>Wyrażam zgodę na bezpłatny staż/praktyki</Text>
        <Toggle runAfterChange={toggle.updateToggle} defaultValue={toggle.defaultValue} />
      </div>
    </ContrastSection>
  );
};

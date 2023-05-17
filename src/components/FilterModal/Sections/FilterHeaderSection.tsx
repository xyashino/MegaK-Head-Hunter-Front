import classes from "@components/FilterModal/FilterModal.module.css";
import { Button } from "@componentsCommon/Button/Button";
import React, {SyntheticEvent} from "react";

interface Props {
    clearAll: (e: SyntheticEvent) => void;
}

export const FilterHeaderSection = ({clearAll}:Props) => {
  return (
    <div className={classes.first_row}>
      <h2>Filtrowanie</h2>
      <Button
        customClasses={classes.btn_filter_modal_smaller_active}
        onClick={clearAll}
      >
        Wyczyść wszystkie
      </Button>
    </div>
  );
};

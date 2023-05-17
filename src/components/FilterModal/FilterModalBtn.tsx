import classes from "@pages/Students/StudentsPage.module.css";
import { Button } from "@componentsCommon/Button/Button";
import React from "react";

interface Props {
  openFilterModal: (e: unknown) => void;
}

export const FilterModalBtn = ({ openFilterModal }: Props) => {
  return (
    <div className={classes.div_btn_to_modal_wrapper}>
      <Button customClasses={classes.btn_to_modal} onClick={openFilterModal}>
        <span
          className="material-icons-outlined"
          style={{
            fontSize: "1.5rem",
            verticalAlign: "-6px",
            color: "#4D4D4D",
            backgroundColor: "",
          }}
        >
          filter_alt
        </span>
        Filtrowanie
      </Button>
    </div>
  );
};

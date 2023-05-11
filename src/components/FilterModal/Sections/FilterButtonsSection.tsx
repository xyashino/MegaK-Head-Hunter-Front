import classes from "@components/FilterModal/FilterModal.module.css";
import { Button } from "@components/Button/Button";
import React, {SyntheticEvent} from "react";

interface Props {
    closeFilterModal: (e: SyntheticEvent) => void;
    onConfirm: (e: SyntheticEvent) => void;
}

export const FilterButtonsSection = ({closeFilterModal,onConfirm}:Props) => {
  return (
      <div className={classes.filter_modal_btns_wrapper}>
      <div className={classes.filter_modal_btns}>
          <Button
              customClasses={classes.button_bigger}
              onClick={closeFilterModal}
          >
              Anuluj
          </Button>
          <Button customClasses={classes.button_bigger} onClick={onConfirm}>
              Pokaż wyniki
          </Button>
      </div>
</div>
  );
};

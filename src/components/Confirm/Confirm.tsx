import React, { SyntheticEvent } from "react";
import Modal from "react-modal";
import classes from "./Confirm.module.css";
import { Button } from "@componentsCommon/Button/Button";


interface Props {
  hideModal: () => void;
  isOpenConfirm: boolean;
  doAfterConfirm: () => void;
  confirmMessage: string;
}
Modal.setAppElement("#root");
const ANIMATION_MS = 400;
export const Confirm = ({
  doAfterConfirm,
  confirmMessage,
  isOpenConfirm,
  hideModal,
}: Props) => {
  const handleConfirm = (e: SyntheticEvent) => {
    e.preventDefault();
    hideModal();
    setTimeout(()=>{
      doAfterConfirm();
    },ANIMATION_MS)
  };

  return (
    <Modal
      isOpen={isOpenConfirm}
      shouldCloseOnEsc
      overlayClassName={classes.modal_container}
      className={`${classes.confirm_modal} ${isOpenConfirm ? '' : classes.modal_out}`}
      onRequestClose={hideModal}
      contentLabel="Confirm Modal"
      closeTimeoutMS={ANIMATION_MS}
    >
      <div>
        <p className={classes.message}>{confirmMessage}</p>
        <div className={classes.buttons}>
          <Button status="disabled" onClick={hideModal}>
            Anuluj
          </Button>
          <Button onClick={handleConfirm}>Zatwierdź</Button>
        </div>
      </div>
    </Modal>
  );
};

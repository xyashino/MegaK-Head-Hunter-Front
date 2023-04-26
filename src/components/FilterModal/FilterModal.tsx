import React from "react";
import Modal from "react-modal";
import classes from "./FilterModal.module.css";
import {Button} from "@components/Button/Button";

Modal.setAppElement('#root');

export type FilterModalProps = {
    isOpen: boolean;
    onRequestClose: () => void | Promise<void>;
    onConfirm: () => void | Promise<void>;
    onCancel: () => void | Promise<void>;
    text?: string;
};

export const FilterModal = ({isOpen, onRequestClose, onConfirm}: FilterModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={classes.filter_modal}
            contentLabel="Filter Modal"
            // closeTimeoutMS={200}
        >
            <h2>Filtrowanie</h2>

            <div className={classes.filter_modal_btns}>
                <Button className="btn_request_close" onClick={onRequestClose}>Anuluj</Button>
                <Button className="btn_confirm" onClick={onConfirm}>Pokaż wyniki</Button>
            </div>
        </Modal>
    );
};
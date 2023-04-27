import React, {useState} from "react";
import Modal from "react-modal";
import classes from "./FilterModal.module.css";
import {Button} from "@components/Button/Button";
import {Input} from "@components/Input/Input";

Modal.setAppElement('#root');

export type FilterModalProps = {
    isOpen: boolean;
    onRequestClose: () => void | Promise<void>;
    onConfirm: () => void | Promise<void>;
    onCancel: () => void | Promise<void>;
    text?: string;
};

export const FilterModal = ({isOpen, onRequestClose, onConfirm}: FilterModalProps) => {

    const [isRemoteButtonActive, setIsRemoteButtonActive] = useState<boolean>(false);
    const [isOfficeButtonActive, setIsOfficeButtonActive] = useState<boolean>(false);
    const [isPermanentButtonActive, setIsPermanentButtonActive] = useState<boolean>(false);
    const [isBeToBeButtonActive, setIsBeToBeButtonActive] = useState<boolean>(false);
    const [isMandateButtonActive, setIsMandateButtonActive] = useState<boolean>(false);
    const [isContractButtonActive, setIsContractButtonActive] = useState<boolean>(false);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={classes.filter_modal}
            contentLabel="Filter Modal"
            closeTimeoutMS={200}
            style={{overlay: {background: '#292a2bbf'}}}
        >
            <div className={classes.first_row}>
                <h2>Filtrowanie</h2>
                <Button
                    className={classes.btn_filter_modal_smaller_active}
                >Wyczyść wszystkie</Button>
            </div>
            <div>
                <p>Ocena przejścia kursu</p>
            </div>
            <div>
                <p>Ocena aktywności i zaangażowania na kursie</p>
            </div>
            <div>
                <p>Ocena kodu w projekcie własnym</p>
            </div>
            <div>
                <p>Ocena pracy w zespole w Scrum</p>
            </div>
            <div>
                <p>Preferowane miejsce pracy</p>
                <div>
                    <Button
                        onClick={() => setIsRemoteButtonActive(!isRemoteButtonActive)}
                        className={isRemoteButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Praca zdalna
                    </Button>
                    <Button
                        onClick={() => setIsOfficeButtonActive(!isOfficeButtonActive)}
                        className={isOfficeButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Praca w biurze</Button>
                </div>
            </div>
            <div>
                <p>Oczekiwany typ kontraktu</p>
                <div>
                    <Button
                        onClick={() => setIsPermanentButtonActive(!isPermanentButtonActive)}
                        className={isPermanentButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Umowa o pracę</Button>
                    <Button
                        onClick={() => setIsBeToBeButtonActive(!isBeToBeButtonActive)}
                        className={isBeToBeButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >B2B</Button>
                    <Button
                        onClick={() => setIsMandateButtonActive(!isMandateButtonActive)}
                        className={isMandateButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Umowa zlecenie</Button>
                    <Button
                        onClick={() => setIsContractButtonActive(!isContractButtonActive)}
                        className={isContractButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Umowa o dzieło</Button>
                </div>
            </div>
            <div>
                <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                <div className={classes.input_filter_modal_smaller}>
                    <p>
                        Od<Input placeholder="np. 1000 zł" type="text" value={''}/>
                        Do<Input placeholder="np. 10000 zł" type="text" value={''}/>
                    </p>
                </div>
            </div>
            <div>
                <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                <div className={classes.input_filter_modal_radio}>
                    <p className={classes.single_input_filter_modal}>
                        <input
                            className={classes.input_radio}
                            type="radio"
                            id="yes"
                            name="yes"
                            value="yes"
                        />
                        <label htmlFor="yes">Tak</label>
                    </p>
                    <p className={classes.single_input_filter_modal}>
                        <input
                            className={classes.input_radio}
                            type="radio"
                            id="no"
                            name="no"
                            value="no"
                        />
                        <label htmlFor="no">Nie</label>
                    </p>
                </div>
            </div>
            <div>
                <p>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</p>
                <div className={classes.input_months}>
                    <Input placeholder="0 miesięcy" type="number" value={''}/>
                </div>
            </div>

            <div className={classes.filter_modal_btns}>
                <Button className={classes.button_bigger} onClick={onRequestClose}>Anuluj</Button>
                <Button className={classes.button_bigger} onClick={onConfirm}>Pokaż wyniki</Button>
            </div>
        </Modal>
    );
};
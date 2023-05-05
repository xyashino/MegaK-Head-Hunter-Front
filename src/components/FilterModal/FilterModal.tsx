import React, {useState} from "react";
import Modal from "react-modal";
import classes from "./FilterModal.module.css";
import {Button} from "@components/Button/Button";
import {Input} from "@components/Input/Input";
import {NumberInputWithArrows} from '@components/NumberInputWithArrows/NumberInputWithArrows';

Modal.setAppElement('#root');

export type FilterModalProps = {
    isOpen: boolean;
    onRequestClose: () => void | Promise<void>;
    onConfirm: () => void | Promise<void>;
    onCancel: () => void | Promise<void>;
    text?: string;
};

export const FilterModal = ({isOpen, onRequestClose, onConfirm}: FilterModalProps) => {

    // const [ratingCategories, setRatingCategories] = useState<RatingCategory[]>(RatingCategories);

    const [isRemoteButtonActive, setIsRemoteButtonActive] = useState<boolean>(false);
    const [isOfficeButtonActive, setIsOfficeButtonActive] = useState<boolean>(false);
    const [isPermanentButtonActive, setIsPermanentButtonActive] = useState<boolean>(false);
    const [isBeToBeButtonActive, setIsBeToBeButtonActive] = useState<boolean>(false);
    const [isMandateButtonActive, setIsMandateButtonActive] = useState<boolean>(false);
    const [isContractButtonActive, setIsContractButtonActive] = useState<boolean>(false);

    const [monthsOfExperience, setMonthsOfExperience] = useState<number>(0);

    const [courseRating, setCourseRating] = useState<number | null>(null);
    const [engagementRating, setEngagementRating] = useState<number | null>(null);
    const [projectRating, setProjectRating] = useState<number | null>(null);
    const [scrumRating, setScrumRating] = useState<number | null>(null);

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const [minSalary, setMinSalary] = useState<string>('');
    const [maxSalary, setMaxSalary] = useState<string>('');

    const clearAllOptions = () => {
        setIsRemoteButtonActive(false);
        setIsOfficeButtonActive(false);
        setIsPermanentButtonActive(false);
        setIsBeToBeButtonActive(false);
        setIsMandateButtonActive(false);
        setIsContractButtonActive(false);
        setMonthsOfExperience(0);
        setIsChecked(false);
        setMinSalary('');
        setMaxSalary('');
        setCourseRating(null);
        setEngagementRating(null);
        setProjectRating(null);
        setScrumRating(null);
    };

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
                    customClasses={classes.btn_filter_modal_smaller_active}
                    onClick={clearAllOptions}
                >Wyczyść wszystkie
                </Button>
            </div>
            <label htmlFor="">Ocena przejścia kursu</label>
            <Input
                type="number"
                placeholder="Wpisz ocenę kursanta w zakresie od 1 do 5"
                customClasses={classes.input_rating}
                value={(courseRating !== null) ? courseRating.toString() : ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCourseRating(Number(e.target.value))}
            />
            <label htmlFor="">Ocena aktywności i zaangażowania na kursie</label>
            <Input
                type="number"
                customClasses={classes.input_rating}
                value={(engagementRating !== null) ? engagementRating.toString() : ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEngagementRating(Number(e.target.value))}
                placeholder="Wpisz ocenę kursanta w zakresie od 1 do 5"
            />
            <label htmlFor="">Ocena kodu w projekcie własnym</label>
            <Input
                type="number"
                customClasses={classes.input_rating}
                value={(projectRating !== null) ? projectRating.toString() : ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectRating(Number(e.target.value))}
                placeholder="Wpisz ocenę kursanta w zakresie od 1 do 5"
            />
            <label htmlFor="">Ocena pracy w zespole w Scrum</label>
            <Input
                type="number"
                customClasses={classes.input_rating}
                value={(scrumRating !== null) ? scrumRating.toString() : ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setScrumRating(Number(e.target.value))}
                placeholder="Wpisz ocenę kursanta w zakresie od 1 do 5"
            />
            <div>
                <p>Preferowane miejsce pracy</p>
                <div>
                    <Button
                        onClick={() => setIsRemoteButtonActive(!isRemoteButtonActive)}
                        customClasses={isRemoteButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Praca zdalna
                    </Button>
                    <Button
                        onClick={() => setIsOfficeButtonActive(!isOfficeButtonActive)}
                        customClasses={isOfficeButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Praca w biurze</Button>
                </div>
            </div>
            <div>
                <p>Oczekiwany typ kontraktu</p>
                <div>
                    <Button
                        onClick={() => setIsPermanentButtonActive(!isPermanentButtonActive)}
                        customClasses={isPermanentButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Umowa o pracę</Button>
                    <Button
                        onClick={() => setIsBeToBeButtonActive(!isBeToBeButtonActive)}
                        customClasses={isBeToBeButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >B2B</Button>
                    <Button
                        onClick={() => setIsMandateButtonActive(!isMandateButtonActive)}
                        customClasses={isMandateButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Umowa zlecenie</Button>
                    <Button
                        onClick={() => setIsContractButtonActive(!isContractButtonActive)}
                        customClasses={isContractButtonActive ? classes.btn_filter_modal_smaller_active : classes.btn_filter_modal_smaller}
                    >Umowa o dzieło</Button>
                </div>
            </div>
            <div>
                <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                <div className={classes.input_filter_modal_smaller}>
                    <p>
                        <label htmlFor="">Od</label>
                        <input
                            placeholder="np. 1000 zł"
                            type="text"
                            value={minSalary}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinSalary(e.target.value)}
                        />
                        <label htmlFor="">Do</label>
                        <input
                            placeholder="np. 10000 zł"
                            type="text"
                            value={maxSalary}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxSalary(e.target.value)}
                        />
                    </p>
                </div>
            </div>
            <div>
                <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                <div>
                    <p className={classes.input_radio_wrapper}>
                        <input
                            className={classes.input_radio}
                            type="radio"
                            id="yes"
                            name="option"
                            value="Tak"
                            checked={isChecked}
                            onChange={() => setIsChecked(true)}
                        />
                        <label htmlFor="yes">Tak</label>
                    </p>
                    <p>
                        <input
                            className={classes.input_radio}
                            type="radio"
                            id="no"
                            name="option"
                            value="Nie"
                            checked={!isChecked}
                            onChange={() => setIsChecked(false)}
                        />
                        <label htmlFor="no">Nie</label>
                    </p>
                </div>
            </div>
            <div>
                <p>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</p>
                <div className={classes.input_months}>
                    <NumberInputWithArrows
                        value={monthsOfExperience}
                        setValue={setMonthsOfExperience}
                        min={0}
                        max={12}
                        monthsOfExperience={monthsOfExperience}
                    />
                </div>
            </div>

            <div className={classes.filter_modal_btns}>
                <Button customClasses={classes.button_bigger} onClick={onRequestClose}>Anuluj</Button>
                <Button customClasses={classes.button_bigger} onClick={onConfirm}>Pokaż wyniki</Button>
            </div>
        </Modal>
    );
};

// TODO: Button "Pokaż wyniki" musi pokazywać wyniki
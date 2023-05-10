import React, { useContext } from "react";
import Modal from "react-modal";
import classes from "./FilterModal.module.css";
import { Button } from "@components/Button/Button";
import RatingsInputs from "@components/RatingInputs/RatingInputs";
import { NumberInputWithArrows } from "@components/NumberInputWithArrows/NumberInputWithArrows";
import { useFilterModal } from "@hooks/useFilterModal";
import { QueryContext } from "@context/QueryContext";
import { QueryAction } from "@enums/query-action.enum";

Modal.setAppElement("#root");

export type FilterModalProps = {
  isOpen: boolean;
  onRequestClose: () => void | Promise<void>;
  onCancel: () => void | Promise<void>;
  text?: string;
};

export const FilterModal = ({ isOpen, onRequestClose }: FilterModalProps) => {
  const { dispatchQuery } = useContext(QueryContext);

  const {
    isTheButtonActive,
    setIsTheButtonActive,
    monthsOfExperience,
    setMonthsOfExperience,
    isChecked,
    setIsChecked,
    salary,
    setSalary,
    clearAllOptions,
    typeOfContractButtons,
    ratings,
    buttonConfig,
    rating,
  } = useFilterModal();

  const onConfirm = () => {
    dispatchQuery({
      type: QueryAction.FilterStudent,
      payload: {
        courseCompletion: rating.course,
        courseEngagement: rating.engagement,
        projectDegree: rating.project,
        teamProjectDegree: rating.scrum,
        minSalary: salary.min,
        maxSalary: salary.max,
        monthsOfCommercialExp: monthsOfExperience,
      },
    });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={classes.filter_modal}
      contentLabel="Filter Modal"
      closeTimeoutMS={200}
      style={{ overlay: { background: "#292a2bbf" } }}
    >
      <div className={classes.modal_container}>
        <div className={classes.first_row}>
          <h2>Filtrowanie</h2>
          <Button
            customClasses={classes.btn_filter_modal_smaller_active}
            onClick={clearAllOptions}
          >
            Wyczyść wszystkie
          </Button>
        </div>
        <RatingsInputs ratings={ratings} />
        <div>
          <p>Preferowane miejsce pracy</p>
          <div>
            {Object.entries(buttonConfig).map(([key, { text }]) => (
              <Button
                key={key}
                onClick={() =>
                  setIsTheButtonActive((prev) => ({
                    ...prev,
                    [key]: !prev[key],
                  }))
                }
                customClasses={
                  isTheButtonActive[key]
                    ? classes.btn_filter_modal_smaller_active
                    : classes.btn_filter_modal_smaller
                }
              >
                {text}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <p>Oczekiwany typ kontraktu</p>
          <div>
            {typeOfContractButtons.map(({ text, isActive, onClick }) => (
              <button
                key={text}
                className={`${classes.btn_filter_modal_smaller} ${
                  isActive ? classes.btn_filter_modal_smaller_active : ""
                }`}
                onClick={onClick}
              >
                {text}
              </button>
            ))}
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
                value={salary.min}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSalary({ ...salary, min: e.target.value })
                }
              />
              <label htmlFor="">Do</label>
              <input
                placeholder="np. 10000 zł"
                type="text"
                value={salary.max}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSalary({ ...salary, max: e.target.value })
                }
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
          <p>
            Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu
          </p>
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
          <Button
            customClasses={classes.button_bigger}
            onClick={onRequestClose}
          >
            Anuluj
          </Button>
          <Button customClasses={classes.button_bigger} onClick={onConfirm}>
            Pokaż wyniki
          </Button>
        </div>
      </div>
    </Modal>
  );
};

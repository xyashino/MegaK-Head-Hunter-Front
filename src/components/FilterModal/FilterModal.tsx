import React, { SyntheticEvent, useContext, useReducer, useState } from "react";
import Modal from "react-modal";
import classes from "./FilterModal.module.css";
import { QueryContext } from "@context/QueryContext";
import { SalarySection } from "@components/FilterModal/Sections/SalarySection";
import { DEFAULT_FILTER_DATA } from "@constants/DefaultFilterData";
import { filterReducer } from "@reducers/FilterReducer";
import { FilterContext } from "@context/FilterContext";
import { FilterAction } from "@enums/filter-action.enum";
import { RatingSection } from "@components/FilterModal/Sections/RatingSection";
import { ContractSection } from "@components/FilterModal/Sections/ContractSection";
import { WorkSection } from "@components/FilterModal/Sections/WorkSection";
import { ApprenticeshipSection } from "@components/FilterModal/Sections/ApprenticeshipSection";
import { MonthSection } from "@components/FilterModal/Sections/MonthSection";
import { QueryAction } from "@enums/query-action.enum";
import { FilterModalBtn } from "@components/FilterModal/FilterModalBtn";
import { buildFilterPayload } from "@components/FilterModal/filter-modal-helper";
import { FilterHeaderSection } from "@components/FilterModal/Sections/FilterHeaderSection";
import { FilterButtonsSection } from "@components/FilterModal/Sections/FilterButtonsSection";

Modal.setAppElement("#root");

export const FilterModal = () => {
  const { dispatchQuery } = useContext(QueryContext);
  const [filter, dispatchFilter] = useReducer(
    filterReducer,
    DEFAULT_FILTER_DATA
  );
  const [isOpened, setIsOpened] = useState(false);

  const openFilterModal = () => setIsOpened(true);
  const closeFilterModal = () => setIsOpened(false);

  const onConfirm = () => {
    dispatchQuery({
      type: QueryAction.FilterStudent,
      payload: buildFilterPayload(filter),
    });
    closeFilterModal();
  };

  const clearAll = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatchFilter({ type: FilterAction.ResetAll, payload: undefined });
  };

  return (
    <>
      <FilterModalBtn openFilterModal={openFilterModal} />
      <Modal
        isOpen={isOpened}
        onRequestClose={closeFilterModal}
        className={classes.filter_modal}
        contentLabel="Filter Modal"
        closeTimeoutMS={200}
        style={{ overlay: { background: "#292a2bbf" } }}
      >
        <FilterContext.Provider value={{ filter, dispatchFilter }}>
          <div className={classes.modal_container}>
            <FilterHeaderSection clearAll={clearAll} />
            <RatingSection />
            <WorkSection />
            <ContractSection />
            <SalarySection />
            <ApprenticeshipSection />
            <MonthSection />
            <FilterButtonsSection
              closeFilterModal={closeFilterModal}
              onConfirm={onConfirm}
            />
          </div>
        </FilterContext.Provider>
      </Modal>
    </>
  );
};

import React, { SyntheticEvent, useContext, useState } from "react";
import Modal from "react-modal";
import classes from "./FilterModal.module.css";
import { QueryContext } from "@context/QueryContext";
import { SalarySection } from "@components/FilterModal/Sections/SalarySection";
import { FilterContext } from "@context/FilterContext";
import { FilterAction } from "@enums/filter-action.enum";
import { RatingSection } from "@components/FilterModal/Sections/RatingSection";
import { ContractSection } from "@components/FilterModal/Sections/ContractSection";
import { WorkSection } from "@components/FilterModal/Sections/WorkSection";
import { ApprenticeshipSection } from "@components/FilterModal/Sections/ApprenticeshipSection";
import { MonthSection } from "@components/FilterModal/Sections/MonthSection";
import { QueryAction } from "@enums/query-action.enum";
import { FilterModalBtn } from "@components/FilterModal/FilterModalBtn";
import { FilterHeaderSection } from "@components/FilterModal/Sections/FilterHeaderSection";
import { FilterButtonsSection } from "@components/FilterModal/Sections/FilterButtonsSection";
import {buildFilterQuery} from "@utils/query/buildFilterQuery";

Modal.setAppElement("#root");

export const FilterModal = () => {
  const { dispatchQuery } = useContext(QueryContext);
  const { filter, dispatchFilter } = useContext(FilterContext);
  const [isOpened, setIsOpened] = useState(false);

  const openFilterModal = () => setIsOpened(true);
  const closeFilterModal = () => setIsOpened(false);

  const onConfirm = () => {
    dispatchQuery({
      type: QueryAction.FilterStudent,
      payload: buildFilterQuery(filter),
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
      </Modal>
    </>
  );
};

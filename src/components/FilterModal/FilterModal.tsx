import React, {
  SyntheticEvent,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Modal from "react-modal";
import classes from "./FilterModal.module.css";
import { QueryContext } from "@context/QueryContext";
import { FilterContext } from "@context/FilterContext";
import { FilterAction } from "@enums/filter-action.enum";
import { QueryAction } from "@enums/query-action.enum";
import { buildFilterQuery } from "@utils/query/buildFilterQuery";
import { SalarySection } from "@components/FilterModal/Sections/SalarySection";
import { RatingSection } from "@components/FilterModal/Sections/RatingSection";
import { ContractSection } from "@components/FilterModal/Sections/ContractSection";
import { WorkSection } from "@components/FilterModal/Sections/WorkSection";
import { ApprenticeshipSection } from "@components/FilterModal/Sections/ApprenticeshipSection";
import { MonthSection } from "@components/FilterModal/Sections/MonthSection";
import { FilterModalBtn } from "@components/FilterModal/FilterModalBtn";
import { FilterHeaderSection } from "@components/FilterModal/Sections/FilterHeaderSection";
import { FilterButtonsSection } from "@components/FilterModal/Sections/FilterButtonsSection";

Modal.setAppElement("#root");

export const FilterModal = () => {
  const { dispatchQuery } = useContext(QueryContext);
  const { filter, dispatchFilter } = useContext(FilterContext);
  const [isOpened, setIsOpened] = useState(false);
  const openFilterModal = () => setIsOpened(true);
  const filterRef = useRef({ ...filter });
  const closeFilterModal = () => {
    if (!filterRef.current) return;
    dispatchFilter({
      type: FilterAction.UpdateAll,
      payload: filterRef.current,
    });
    setIsOpened(false);
  };

  const onConfirm = () => {
    dispatchQuery({
      type: QueryAction.FilterStudent,
      payload: buildFilterQuery(filter),
    });
    setIsOpened(false);
  };

  useLayoutEffect(() => {
    if (isOpened) {
      filterRef.current = {
        rating: filter.rating.map((item) => ({ ...item })),
        salary: { ...filter.salary },
        typeWork: filter.typeWork.map((item) => ({ ...item })),
        canTakeApprenticeship: filter.canTakeApprenticeship,
        contract: filter.contract.map((item) => ({ ...item })),
        monthOfExperience: filter.monthOfExperience,
      };
    }
  }, [isOpened]);
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
        className={`${classes.filter_modal} ${
          isOpened ? "" : classes.modal_out
        }`}
        overlayClassName={classes.modal_container}
        contentLabel="Filter Modal"
        shouldCloseOnEsc
        closeTimeoutMS={300}
      >
        <div>
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

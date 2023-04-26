import React, {useState} from "react";
import classes from "./HrPanel.module.css";
import {BookmarkNavLink} from "@components/BookmarkNavLink/BookmarkNavLink";
import {Outlet} from "react-router-dom";
import {Button} from "@components/Button/Button";
import {FilterModal} from "@components/FilterModal/FilterModal";

export const HrPanel = () => {
    const [filterModalIsOpen, setFilterModalIsOpen] = useState<boolean>(false);

    const openFilterModal = () => {
        setFilterModalIsOpen(true);
    }

    const closeFilterModal = () => {
        setFilterModalIsOpen(false);
    }

    return (
        <>
            <div className={classes.div_hr_panel_wrapper}>
                <header className={classes.hr_panel_header}>
                    <BookmarkNavLink text="Dostepni kursanci" to="/hr/students"/>
                    <BookmarkNavLink text="Do rozmowy" to="/hr/talk"/>
                </header>
                <div className={classes.btn_to_modal}>
                <Button onClick={openFilterModal}>Filtrowanie</Button>
                </div>
                <div className={classes.hr_panel_main}>
                    <Outlet/>
                </div>
            </div>
            <div className={classes.filter_modal_wrapper}>
            <FilterModal
                isOpen={filterModalIsOpen}
                onRequestClose={closeFilterModal}
                onConfirm={closeFilterModal}
                onCancel={closeFilterModal}
            />
            </div>
        </>
    );
};
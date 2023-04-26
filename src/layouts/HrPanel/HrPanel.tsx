import React, {useState} from "react";
import classes from "./HrPanel.module.css";
import { BookmarkNavLink } from "@components/BookmarkNavLink/BookmarkNavLink";
import { Outlet } from "react-router-dom";
import {Button} from "@components/Button/Button";

export const HrPanel = () => {
    const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className={classes.div_hr_panel_wrapper}>
                <header className={classes.hr_panel_header}>
                    <BookmarkNavLink text="Dostepni kursanci" to="/hr/students" />
                    <BookmarkNavLink text="Do rozmowy" to="/hr/talk" />
                </header>
                <Button>Filtrowanie</Button>
                <div className={classes.hr_panel_main}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};
import React, {useState} from "react";
import classes from "./HrPanel.module.css";
import {Outlet} from "react-router-dom";
import {Button} from "@components/Button/Button";
import {FilterModal} from "@components/FilterModal/FilterModal";
import FilterAltIcon from '@mui/icons-material/FilterAlt';


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
                <div className={classes.div_btn_to_modal_wrapper}>
                    <Button
                        customClasses={classes.btn_to_modal}
                        onClick={openFilterModal}><FilterAltIcon
                        style={{fontSize: "1.3rem", verticalAlign: "-5px", color: "#4D4D4D"}}
                    />Filtrowanie
                    </Button>
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
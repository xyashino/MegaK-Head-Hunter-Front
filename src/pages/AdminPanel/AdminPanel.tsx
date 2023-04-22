import React, { useState } from 'react';
import classes from './AdminPanel.module.css';
import { LinkToBookmark } from '@components/LinkToBookmark/LinkToBookmark';

export const AdminPanel = () => {
    const [clickedIndex, setClickedIndex] = useState(-1);

    const handleClick = (index: number) => {
        setClickedIndex(index);
    };

    return (
        <>
            <div className={classes.div_admin_panel_wrapper}>
                <header className={classes.admin_panel_header}>
                    <LinkToBookmark
                        text="Dodaj kursantów"
                        index={0}
                        clickedIndex={clickedIndex}
                        handleClick={handleClick}
                        url="/admin"
                    />
                    <LinkToBookmark
                        text="Dodaj użytkowników HR"
                        index={1}
                        clickedIndex={clickedIndex}
                        handleClick={handleClick}
                        url="/admin"
                    />
                </header>
                <main className={classes.admin_panel_main}></main>
            </div>
        </>
    );
};


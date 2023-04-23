import React, { useState } from 'react';
import classes from './AdminPanel.module.css';
import { BookmarkNavLink } from '@components/BookmarkNavLink/BookmarkNavLink';

export const AdminPanel = () => {
    const [clickedIndex, setClickedIndex] = useState(-1);
    const [selectedOption, setSelectedOption] = useState('');

    const handleClick = (index: number, option: string) => {
        setClickedIndex(index);
        setSelectedOption(option);
    };

    return (
        <>
            <div className={classes.div_admin_panel_wrapper}>
                <header className={classes.admin_panel_header}>
                    <BookmarkNavLink
                        text="Dodaj kursantów"
                        index={0}
                        clickedIndex={clickedIndex}
                        handleClick={handleClick}
                        option="Kursanci"
                    />
                    <BookmarkNavLink
                        text="Dodaj użytkowników HR"
                        index={1}
                        clickedIndex={clickedIndex}
                        handleClick={handleClick}
                        option="Użytkownicy HR"
                    />
                </header>
                <main className={classes.admin_panel_main}>
                    {selectedOption === 'Kursanci' && <div>drag&drop</div>}
                    {selectedOption === 'Użytkownicy HR' && <div>formularz</div>}
                </main>
            </div>
        </>
    );
};


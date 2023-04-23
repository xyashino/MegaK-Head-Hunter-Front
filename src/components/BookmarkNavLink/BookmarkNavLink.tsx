import React from 'react';
import classes from './BookmarkNavLink.module.css';
import {NavLink} from 'react-router-dom';

interface LinkToBookmarkProps {
    text: string;
    index: number;
    clickedIndex: number;
    handleClick: (index: number, option: string) => void;
    option: string;
}

export const BookmarkNavLink = ({ text, index, clickedIndex, handleClick, option}: LinkToBookmarkProps) => {
    return (
        <NavLink
            onClick={() => handleClick(index, option)}
            className={`${classes.bookmark_nav_link} ${clickedIndex === index ? classes.clicked_bookmark_nav_link: classes.bookmark_nav_link}`}
            to="/admin"
        >
            {text}
        </NavLink>
    );
};



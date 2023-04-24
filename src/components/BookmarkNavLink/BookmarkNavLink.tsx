import React from 'react';
import classes from './BookmarkNavLink.module.css';
import {NavLink} from 'react-router-dom';

const red = "var(--megakRed)";
const bgInput = "var(--bgInput)";
const white = "var(--white)";
const inactive = "var(--inactiveBookmark)";

interface LinkToBookmarkProps {
    text?: string;
    to: string;
}

export const BookmarkNavLink = ({ text, to }: LinkToBookmarkProps) => {
    return (

        <NavLink
            to={to}
            className={classes.bookmark_nav_link}
            style={({ isActive }) => {
                return {
                    borderColor: isActive ? red : bgInput,
                    color: isActive ? white : inactive,
                };
            }}
        >
            {text}
        </NavLink>

    );
};



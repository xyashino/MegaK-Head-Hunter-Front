import React from 'react';
import classes from './BookmarkNavLink.module.css';
import {NavLink} from 'react-router-dom';

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
                    borderColor: isActive ? "var(--megakRed)" : "var(--bgInput)",
                    color: isActive ? "var(--white)" : "var(--inactiveBookmark)",
                };
            }}
        >
            {text}
        </NavLink>

    );
};



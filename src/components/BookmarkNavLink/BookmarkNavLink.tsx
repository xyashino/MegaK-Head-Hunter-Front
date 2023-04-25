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
            className={({ isActive, isPending }) =>
                isActive ? classes.active : classes.pending
            }
        >
            {text}
        </NavLink>

    );
};



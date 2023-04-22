import React from 'react';
import classes from './LinkToBookmark.module.css';
import { Link } from 'react-router-dom';

interface LinkToBookmarkProps {
    text: string;
    index: number;
    clickedIndex: number;
    handleClick: (index: number) => void;
    url: string;
}

export const LinkToBookmark = ({ text, index, clickedIndex, handleClick, url }: LinkToBookmarkProps) => {
    return (
        <Link
            onClick={() => handleClick(index)}
            className={`${classes.link_add} ${clickedIndex === index ? classes.clicked : ''}`}
            to={url}
        >
            {text}
        </Link>
    );
};

import React from "react";
import classes from './Info.module.css'

type Props = {
    text: string,
    clickMethod:()=>void;
    type: 'success' | 'error';
}

export const Info = ({text,type,clickMethod}: Props) => {
    return <div className={`${classes.error_info} ${classes[type]}`}>
        <p className={classes.test}>{text}</p>
        <div className={classes.close} onClick={clickMethod}>x</div>
    </div>
}
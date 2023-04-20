import React from "react";
import classes from './ErrorInfo.module.css';

type Props = {
    title: string,
    clickMethod:()=>void;
    show:boolean;
}

export const ErrorInfo = ({title,clickMethod,show}: Props) => {
    if(!show) return null;
    return <div className={classes.error_info}>
        <p className={classes.test}>{title}</p>
        <div className={classes.close} onClick={clickMethod}>x</div>
    </div>
}

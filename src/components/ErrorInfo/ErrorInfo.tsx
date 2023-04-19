import React from "react";
import './ErrorInfo.css'

type Props = {
    title: string,
    clickMethod:()=>void;
    show:boolean;
}

export const ErrorInfo = ({title,clickMethod,show}: Props) => {
    if(!show) return null;
    return <div className="ErrorInfo">
        <p className='test'>{title}</p>
        <div className="close test" onClick={clickMethod}>x</div>
    </div>
}
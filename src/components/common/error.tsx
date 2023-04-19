import React from "react";
import './error.css'

type Props = {
    title: string,
}

export const Error = (props: Props) => {
    return <div className="ErrorInfo">
        <p>{props.title}</p>
        <div className="close">x</div>
    </div>
}
import React, { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import alertIcon from  '@assets/alert-icon.svg'
import classes from './Alert.module.css';

type Props = {
  kind: 'success' | 'fail' | 'warning',
  message: string,
  durationMs?: number,
}

export const Alert = ({kind, message, durationMs = 3000}: Props) => {
  const [display, setDisplay] = useState(true);
  const portal = document.getElementById('portal') as HTMLElement;
  const alertElement = useRef<HTMLDivElement>(null);

  if (!display) {
    return null
  };

  useLayoutEffect(() => {
    if (alertElement.current) {
      alertElement.current.classList.add(classes.slideIn);

      setTimeout(() => {
        alertElement.current?.classList.add(classes.slideOut);
      }, durationMs);
    };
  },[]);

  return ReactDOM.createPortal(
    <div ref={alertElement} className={`${classes.Alert} ${classes[kind]}`}>
      <p className={classes.message}>{message}</p>
      <img className={classes.image} src={alertIcon} alt="alert icon"/>
    </div>,
    portal
  );
}
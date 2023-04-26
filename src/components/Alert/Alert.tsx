import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
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

/*   switch (kind) {
    case 'success':
      return ReactDOM.createPortal(
        <div id="Alert" className={`${classes.Alert} ${classes.success}`} onClick={handleClick}>
          <p className={classes.message}>{message}</p>
          <img className={classes.image} src={successIcon} alt="success" />
        </div>,
        portal
      );
    case 'fail': 
      return ReactDOM.createPortal(
        <div id="Alert" className={`${classes.Alert} ${classes.fail}`} onClick={handleClick}>
          <p className={classes.message}>{message}</p>
          <img className={classes.image} src={failIcon} alt="fail" />
        </div>,
        portal
      );
    case 'warning': 
      return ReactDOM.createPortal(
        <div id="Alert" className={`${classes.Alert} ${classes.warning}`} onClick={handleClick}>
          <p className={classes.message}>{message}</p>
          <img className={classes.image} src={warningIcon} alt="warning" />
        </div>,
        portal
      );
  } */
}
import React, { useState } from "react";
import ReactDOM from "react-dom";
import successIcon from  '@assets/correct-circle.svg'
import failIcon from "@assets/cross-circle.svg"
import warningIcon from "@assets/warning-cicrle.svg"
import classes from './Alert.module.css';

type Props = {
  kind: 'success' | 'fail' | 'warning',
  message: string
}

export const Alert = ({kind, message}: Props) => {
  const [display, setDisplay] = useState(true);

  const portal = document.getElementById('portal') as HTMLElement;

  const handleClick = () => setDisplay(false)

  if (!display) {
    return null
  }

  switch (kind) {
    case 'success':
      return ReactDOM.createPortal(
        <div className={`${classes.Alert} ${classes.success}`} onClick={handleClick}>
          <p className={classes.message}>{message}</p>
          <img className={classes.image} src={successIcon} alt="success" />
        </div>,
        portal
      );
    case 'fail': 
      return ReactDOM.createPortal(
        <div className={`${classes.Alert} ${classes.fail}`} onClick={handleClick}>
          <p className={classes.message}>{message}</p>
          <img className={classes.image} src={failIcon} alt="fail" />
        </div>,
        portal
      );
    case 'warning': 
      return ReactDOM.createPortal(
        <div className={`${classes.Alert} ${classes.warning}`} onClick={handleClick}>
          <p className={classes.message}>{message}</p>
          <img className={classes.image} src={warningIcon} alt="warning" />
        </div>,
        portal
      );
  }
}
import React from "react";
import successIcon from  '@assets/correct-circle.svg'
import failIcon from "@assets/cross-circle.svg"
import warningIcon from "@assets/warning-cicrle.svg"
import styles from './Alert.module.css';

type Props = {
  kind: 'success' | 'fail' | 'warning',
  message: string
}

export const Alert = ({kind, message}: Props) => {

  switch (kind) {
    case 'success':
      return <div className={`${styles.Alert} ${styles.success}`}>
        <p>{message}</p>
        <img src={successIcon} alt="success" />
      </div>;
    case 'fail': 
      return <div className={`${styles.Alert} ${styles.fail}`}>
        <p>{message}</p>
        <img src={failIcon} alt="fail" />
      </div>;
    case 'warning': 
      return <div className={`${styles.Alert} ${styles.warning}`}>
        <p>{message}</p>
        <img src={warningIcon} alt="warning" />
      </div>;
  }

}
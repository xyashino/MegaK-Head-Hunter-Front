import React from "react";
import successIcon from  '@assets/correct-circle.svg'
import failIcon from "@assets/cross-circle.svg"
import warningIcon from "@assets/warning-cicrle.svg"
import styles from './Alert.module.css';

type Props = {
  kind: 'success' | 'fail' | 'warning',
  message: string
}

export const Alert = (props: Props) => {

  switch (props.kind) {
    case 'success':
      return <div className={`${styles.Alert} ${styles.success}`}>
        <p>{props.message}</p>
        <img src={successIcon} alt="success" />
      </div>;
    case 'fail': 
      return <div className={`${styles.Alert} ${styles.fail}`}>
        <p>{props.message}</p>
        <img src={failIcon} alt="fail" />
      </div>;
    case 'warning': 
      return <div className={`${styles.Alert} ${styles.warning}`}>
        <p>{props.message}</p>
        <img src={warningIcon} alt="warning" />
      </div>;
  }

}
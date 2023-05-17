import React, { useLayoutEffect, useState } from "react";
import classes from "./Toggle.module.css";

interface Props {
  runAfterChange: (isOn: boolean) => void;
  defaultValue?: boolean;
}

export const Toggle = ({ runAfterChange, defaultValue = false }: Props) => {
  const [isOn, setIsOn] = useState(defaultValue);

  useLayoutEffect(() => {
    runAfterChange(isOn);
  }, [isOn]);

  const handleChange = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div className={classes.toggle}>
      <input
        type="checkbox"
        checked={isOn}
        onChange={handleChange}
        id="toggle-switch"
      />
      <label htmlFor="toggle-switch">Toggle</label>
    </div>
  );
};

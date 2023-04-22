import React from "react";
import classes from "./DragAndDrop.module.css"

type Props = {
  message: string,
}

export const DragAndDrop = ({message}: Props) => {
  return (
    <>
        <p>{message}</p>
    </>
)}
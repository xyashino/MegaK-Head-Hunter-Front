import classes from "./TextArea.module.css";
import React, {HTMLAttributes, useLayoutEffect, useRef} from "react";

interface Props extends HTMLAttributes<HTMLTextAreaElement>{
    description?: string;
    value?:string;
    name?:string;
}

export const TextArea = ({description,...rest}:Props) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useLayoutEffect(()=>{
        const textarea = textAreaRef.current;
        if (!textarea) return;
        const adjustHeight = () => {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        };
        textarea.addEventListener("input", adjustHeight);
        adjustHeight();

        return () => {
            textarea.removeEventListener("input", adjustHeight);
        };
    },[])
  return (
    <div className={classes.textarea_group}>
      {description && (
        <span className={classes.description}>{description}:</span>
      )}
      <textarea className={classes.textarea} placeholder="Opcjonalne"  {...rest}  ref={textAreaRef}/>
    </div>
  );
};

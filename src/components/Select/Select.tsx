import React, {HTMLAttributes, SyntheticEvent} from "react";
import classes from "./Select.module.css";

interface Props extends Omit<HTMLAttributes<HTMLSelectElement> , 'onChange'>{
    options: string[];
    description?: string;
    onChange?: (e:SyntheticEvent) => void;
    value?:string;
    name?:string
}

export const Select = ({ options, description, onChange ,...rest}: Props) => {
    const handleSelectChange = (e: SyntheticEvent) => {
        onChange && onChange(e);
    };

    return (
        <div className={classes.select_group}>
            {description && (
                <span className={classes.description}>{description}:</span>
            )}
            <select className={classes.select} onChange={handleSelectChange} {...rest}>
                {options.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
};

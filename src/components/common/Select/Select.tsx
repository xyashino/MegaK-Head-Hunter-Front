import React, {HTMLAttributes, SyntheticEvent} from "react";
import classes from "./Select.module.css";

interface Props extends Omit<HTMLAttributes<HTMLSelectElement> , 'onChange'>{
    options: string[];
    description?: string;
    onChange?: (e:SyntheticEvent) => void;
    value?:string;
    name?:string
    fullSize?:boolean;
}

export const Select = ({ options, description, onChange , fullSize=true ,...rest}: Props) => {
    const handleSelectChange = (e: SyntheticEvent) => {
        onChange && onChange(e);
    };

    return (
        <div className={`${classes.select_group} ${fullSize ? classes.full_size : ''}`}>
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

import classes from "./EditCvSections.module.css";
import {Input} from "@components/Input/Input";
import {SyntheticEvent} from "react";
import {ContrastSection} from "@components/EditCvSections/ContrastSection";

interface Props {
    tel:{defaultValue:string, name:string}
    firstname:{defaultValue:string, name:string}
    lastname:{defaultValue:string, name:string}
    onChange: (e:SyntheticEvent)=>void;
}
export const PersonalSection = ({tel,firstname,lastname,onChange}:Props)=>{

    return <ContrastSection title="Dane Osobowe">
        <div className={classes.small}>
            <Input
                value={tel.defaultValue}
                description="Nr Telefonu"
                name={tel.name}
                onChange={onChange}
            />
        </div>
        <div className={classes.small}>
            <Input
                value={firstname.defaultValue}
                description="Imię"
                name={firstname.name}
                onChange={onChange}
            />
        </div>
        <div className={classes.small}>
            <Input
                value={lastname.defaultValue}
                description="Nazwisko"
                name={lastname.name}
                onChange={onChange}
            />
        </div>
    </ContrastSection>
}
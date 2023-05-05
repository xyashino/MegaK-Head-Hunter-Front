import React from "react";
import classes from '../EditCv/EditCv.module.css';
import { Button } from "@components/Button/Button";
import {AxiosSetup} from "@utils/network/AxiosSetup";
import {RequestPath} from "@enums/request-path.enum";
import {useNavigate, useOutletContext} from "react-router-dom";

export const Panel = () => {
    const { id } = useOutletContext() as { id: string };
    const navigate = useNavigate();

    const a = ()=>{
      const result =window.confirm('Uwaga utracisz dostęp do aplikacji !');
       if(result) {
           AxiosSetup.patch(`${RequestPath.GetOneStudent}${id}`,{
               status: "Zatrudniony"
           })
           navigate('/login')
       }
   }

  return (
    <div className={classes.edit_cv}>
       <h1 style={{color:"white",margin:'20px'}}>Zarządzaj Studentem:</h1>
        <Button onClick={()=>navigate(`/student/cv/${id}`)} style={{margin:'20px'}}>Zobacz Moje Cv</Button>
        <Button onClick={a}>Jestem Zatrudniony</Button>
    </div>
  );
};

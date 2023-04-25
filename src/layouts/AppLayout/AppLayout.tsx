import {Navbar} from "@components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import classes from "./AppLayout.module.css";
 export const AppLayout = ()=>{
    return <div className={classes.app_layout}>
        <Navbar/>
        <div className={classes.app_container}>
            <Outlet/>
        </div>
    </div>
}
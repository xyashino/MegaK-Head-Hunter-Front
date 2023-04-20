import { redirect } from "react-router-dom";
import {AxiosBase} from "./axios-base";
export const checkAuth = async () => {
    try {
        await AxiosBase.get("users/current");
        return true;
    } catch (e) {
        return redirect('/login');
    }
};
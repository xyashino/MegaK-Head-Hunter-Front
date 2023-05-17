import { AxiosSetup } from "@utils/network/AxiosSetup";
import {toast} from "react-hot-toast";
export const getDataFrom = async (path:string) => {
    try {
        const response = await AxiosSetup.get(path);
        return response.data;
    } catch (e) {
        toast.error('Nieprawidłowy URL')
    }
};

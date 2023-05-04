import { PageRouter } from "@enums/page-router.enum";
import { redirect } from "react-router-dom";
import { AxiosSetup } from "@utils/network/AxiosSetup";
export const getDataFrom = async (path:string) => {
    try {
        const response = await AxiosSetup.get(path);
        return response.data;
    } catch (e) {
        return redirect(PageRouter.Error);
    }
};

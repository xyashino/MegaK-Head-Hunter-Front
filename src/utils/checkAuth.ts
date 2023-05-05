import { PageRouter } from "@enums/page-router.enum";
import { RequestPath } from "@enums/request-path.enum";
import { AxiosSetup } from "@utils/network/AxiosSetup";
import { redirect } from "react-router-dom";
import {toast} from "react-hot-toast";
export const checkAuth = async () => {
  try {
    const response = await AxiosSetup.get(RequestPath.Auth);
    return response.data;
  } catch (e) {
    toast['error']('Musisz się zalogować')
    return redirect(PageRouter.Login);
  }
};

import axios from "axios";
import { redirect } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";
import { RequestPath} from "@enums/request-path.enum";
import {AxiosSetup} from "@utils/network/AxiosSetup";
axios.defaults.baseURL = "http://localhost:3000";

export const checkAuth = async () => {
  try {
    const response = await AxiosSetup.get(RequestPath.Auth);
     return response.data;
  } catch (e) {
    return redirect(PageRouter.Login);
  }
};

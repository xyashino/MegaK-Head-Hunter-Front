import { PageRouter } from "@enums/page-router.enum";
import { RequestPath } from "@enums/request-path.enum";
import { AxiosSetup } from "@utils/network/AxiosSetup";
import { redirect } from "react-router-dom";
export const checkAuth = async () => {
  try {
    const response = await AxiosSetup.get(RequestPath.Auth);
    return response.data;
  } catch (e) {
    return redirect(PageRouter.Login);
  }
};

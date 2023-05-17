import { redirect } from "react-router-dom";
import { toast } from "react-hot-toast";
import { PageRouter } from "@enums/page-router.enum";
import { RequestPath } from "@enums/request-path.enum";
import { AxiosSetup } from "@utils/network/AxiosSetup";

export const checkAuth = async () => {
  try {
    return (await AxiosSetup.get(RequestPath.Auth)).data;
  } catch (e) {
    toast.error("Musisz się zalogować");
    return redirect(PageRouter.Login);
  }
};

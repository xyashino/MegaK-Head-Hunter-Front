import { CurrentUserResponse } from "@backendTypes";
import { Navbar } from "@components/Navbar/Navbar";
import { PageRouter } from "@enums/page-router.enum";
import { useLayoutEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import classes from "./AppLayout.module.css";
export const AppLayout = () => {
  const { role, data, id } = useLoaderData() as CurrentUserResponse;
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === PageRouter.Main) {
      switch (role) {
        case "admin":
          return navigate(PageRouter.BaseAdmin);
        case "student":
          return navigate(PageRouter.BaseStudent);
        case "hr":
          return navigate(PageRouter.BaseHr);
        default:
          return navigate(PageRouter.Error);
      }
    }
  }, [location]);

  const fullName = role === "admin" ? "Admin" : data.fullName;
  const githubUsername = role === "student" ? data.githubUsername : undefined;
  return (
    <div className={classes.app_layout}>
      <Navbar fullName={fullName} githubUsername={githubUsername} />
      <div
        className={`${classes.app_container} ${
          location.pathname.includes(`/cv/`) ? "" : classes.app_container_gray
        }`}
      >
        <Outlet context={{ role, id: data?.id ?? "", userId: id }} />
      </div>
    </div>
  );
};

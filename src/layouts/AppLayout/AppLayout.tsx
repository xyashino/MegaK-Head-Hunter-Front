import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CurrentUserResponse } from "@backendTypes";
import { Navbar } from "@components/Navbar/Navbar";
import { PageRouter } from "@enums/page-router.enum";
import { Outlet, useLoaderData } from "react-router-dom";
import classes from "./AppLayout.module.css";

export const AppLayout = () => {
  const { role, data, id } = useLoaderData() as CurrentUserResponse;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PageRouter.Main) {
      switch (role) {
        case "admin":
          navigate(PageRouter.BaseAdmin);
          break;
        case "student":
          navigate(PageRouter.BaseStudent);
          break;
        case "hr":
          navigate(PageRouter.BaseHr);
          break;
        default:
          navigate(PageRouter.Error);
          break;
      }
    }
  }, [pathname, role, navigate]);

  const fullName = role === "admin" ? "Admin" : data?.fullName;
  const githubUsername = role === "student" ? data?.githubUsername : undefined;

  return (
    <div className={classes.app_layout}>
      <Navbar fullName={fullName} githubUsername={githubUsername} />
      <div
        className={`${classes.app_container} ${
          pathname.includes("/cv/") ? "" : classes.app_container_gray
        }`}
      >
        <Outlet context={{ role, id: data?.id ?? "", userId: id }} />
      </div>
    </div>
  );
};

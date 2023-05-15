import React, { useEffect } from "react";

import { CurrentUserResponse } from "@backendTypes";
import { Navbar } from "@components/Navbar/Navbar";
import { PageRouter } from "@enums/page-router.enum";
import {
  Outlet, ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import classes from "./AppLayout.module.css";
export const AppLayout = () => {
  const { role, data, id } = useLoaderData() as CurrentUserResponse;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PageRouter.Main) {
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
  }, [pathname]);

  const fullName = role === "admin" ? "Admin" : data.fullName;
  const githubUsername = role === "student" ? data.githubUsername : undefined;
  return (
    <div className={classes.app_layout}>
      <Navbar fullName={fullName} githubUsername={githubUsername} />
      <ScrollRestoration />
      <div
        className={`${classes.app_container} ${
          pathname.includes(`/cv/`) ? "" : classes.app_container_gray
        }`}
      >
        <Outlet context={{ role, id: data?.id ?? "", userId: id }} />
      </div>
    </div>
  );
};

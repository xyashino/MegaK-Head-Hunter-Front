import { Navbar } from "@components/Navbar/Navbar";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import classes from "./AppLayout.module.css";
import { PageRouter } from "@enums/page-router.enum";
import React, { useLayoutEffect } from "react";
import {CurrentUserResponse} from "@backendTypes";
export const AppLayout = () => {
  const {role,data} = useLoaderData() as CurrentUserResponse;
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === PageRouter.Main) {
      switch (role) {
        case "admin":
          return navigate(PageRouter.BaseAdmin);
        case "student":
          return navigate(PageRouter.BaseStudent);
        default:
          return navigate(PageRouter.Error);
      }
    }
  }, [location]);

  const fullName = role === "admin" ? "Admin" : data.fullName
  const githubUsername = role ==='student' ? data.githubUsername : undefined;

  return (
    <div className={classes.app_layout}>
      <Navbar fullName={fullName} githubUsername={githubUsername} />
      <div className={classes.app_container}>
        <Outlet context={{role,id:data?.id ?? ''}} />
      </div>
    </div>
  );
};

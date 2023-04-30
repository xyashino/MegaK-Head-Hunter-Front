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
import { UserResponse } from "@backendTypes";
export const AppLayout = () => {
  const data = useLoaderData() as UserResponse;
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === PageRouter.Main) {
      switch (data.role) {
        case "admin":
          return navigate(PageRouter.BaseAdmin);
        default:
          return navigate(PageRouter.Error);
      }
    }
  }, [location]);

  return (
    <div className={classes.app_layout}>
      <Navbar lastName={""} firstName={"Admin"} />
      <div className={classes.app_container}>
        <Outlet context={data} />
      </div>
    </div>
  );
};

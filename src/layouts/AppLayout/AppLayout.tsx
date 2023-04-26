import { Navbar } from "@components/Navbar/Navbar";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import classes from "./AppLayout.module.css";
import { PageRouter } from "@enums/page-router.enum";
import React,{ useLayoutEffect } from "react";
import { UserResponse } from "@backendTypes/users/user-response";
export const AppLayout = () => {
  const data = useLoaderData() as UserResponse;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (data.role === "admin") return navigate(PageRouter.AdminStudents);
    navigate(PageRouter.Error);
    return;
  }, []);

  return (
    <div className={classes.app_layout}>
      <Navbar lastName={''} firstName={'Admin'}/>
      <div className={classes.app_container}>
        <Outlet context={data} />
      </div>
    </div>
  );
};

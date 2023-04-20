import React from "react";
import "./App.css";
import { LoginPage } from "./pages/Login/LoginPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {checkAuth} from "./utils/check-auth";
import {LoginInPage} from "./pages/LoginIn/LoginInPage";

const routers = createBrowserRouter([
    {
        path: "/",
        loader: checkAuth,
        element: <LoginInPage />
    },
    {
        path:'/login',
        element: <LoginPage />,
    }
]);
export const App = () =>  <RouterProvider router={routers} />;

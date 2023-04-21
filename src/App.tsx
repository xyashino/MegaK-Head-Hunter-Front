import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "@pages/Login/LoginPage";
import { NotFound404 } from "@pages/NotFound404/NotFound404";

const routers = createBrowserRouter([
    {
        path:'*',
        element: <LoginPage/>,
    },
    {
        path:'/404',
        element: <NotFound404 message="Page not found - 404"/>
    }
]);
export const App = () =>  <RouterProvider router={routers} />;

import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "@pages/Login/LoginPage";

const routers = createBrowserRouter([
    {
        path:'*',
        element: <LoginPage/>,
    }
]);
export const App = () =>  <RouterProvider router={routers} />;

import React from "react";
import { LoginPage } from "@pages/Login/LoginPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const routers = createBrowserRouter([
    {
        path:'*',
        element: <LoginPage />,
    }
]);
export const App = () =>  <RouterProvider router={routers} />;

import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "@pages/Login/LoginPage";
import {AdminPanel} from "@pages/AdminPanel/AdminPanel";

const routers = createBrowserRouter([
    {
        path: '*',
        element: <LoginPage/>,
    },
    {
        path:'admin',
        element: <AdminPanel/>
    },
    {
        path:'admin/students',
        element: <AdminPanel/>
    },
    {
        path:'admin/hr',
        element: <AdminPanel/>
    },
]);
export const App = () =>  <RouterProvider router={routers} />;

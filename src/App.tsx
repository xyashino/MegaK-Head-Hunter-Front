import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Avatar, size} from "@components/Avatar/Avatar";

const routers = createBrowserRouter([
    {
        path:'*',
        element: <Avatar type={size.Large} githubUsername='Ami777'/>,
    }
]);
export const App = () =>  <RouterProvider router={routers} />;

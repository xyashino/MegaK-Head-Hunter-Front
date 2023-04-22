import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "@pages/Login/LoginPage";
import { NotFoundPage } from "@pages/NotFound404/NotFoundPage";
import { DragAndDrop } from "@pages/DragAndDrop/DragAndDrop";

const routers = createBrowserRouter([
    {
        path:'*',
        element: <LoginPage/>,
    },
    {
        path:'/404',
        element: <NotFoundPage message="Page not found - 404"/>
    },
    {
        path:'/dragdrop',
        element: <DragAndDrop message="Drag and drop"/>
    }
]);
export const App = () =>  <RouterProvider router={routers} />;

import React from "react";
import { LoginPage } from "@pages/Login/LoginPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ErrorPage } from "@pages/Error/ErrorPage";

const routers = createBrowserRouter([
    {
        path:'*',
        element: <LoginPage />,
    },
    {
        path:'/error',
        element: <ErrorPage title="Błąd" message="błąd krytyczny, wyrzuć komputer przez okno"/>
    }
]);
export const App = () =>  <RouterProvider router={routers} />;

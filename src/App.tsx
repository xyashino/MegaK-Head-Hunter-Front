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
        element: <ErrorPage title="Błąd 500" message="Wystąpił problem, spróbuj ponownie za chwilę." buttonMessage="Powrót do strony głównej"/>
    }
]);
export const App = () =>  <RouterProvider router={routers} />;

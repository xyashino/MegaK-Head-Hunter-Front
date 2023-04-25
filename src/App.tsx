import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ErrorPage } from "@pages/Error/ErrorPage";
import {LoginPage} from "@pages/Login/LoginPage";
import { NotFoundPage } from "@pages/NotFound404/NotFoundPage";
import { DragAndDrop } from "@components/DragAndDrop/DragAndDrop";

const routers = createBrowserRouter([
    {
        path:'*',
        element: <LoginPage />,
    },
    {
        path:'/error',
        element: <ErrorPage title="Błąd 500" message="Wystąpił problem, spróbuj ponownie za chwilę." buttonMessage="Powrót do strony głównej"/>
    },
    {
        path:'/404',
        element: <NotFoundPage message="Page not found - 404"/>
    },
    {
        path: '/drop',
        element: <DragAndDrop/>
    }
]);
export const App = () =>  <RouterProvider router={routers} />;

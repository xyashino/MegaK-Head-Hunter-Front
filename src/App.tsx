import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "@pages/Error/ErrorPage";
import { LoginPage } from "@pages/Login/LoginPage";
import { NotFoundPage } from "@pages/NotFound404/NotFoundPage";
import { AppLayout } from "@layouts/AppLayout/AppLayout";
import { AdminPanel } from "@layouts/AdminPanel/AdminPanel";
import {HrPanel} from "@layouts/HrPanel/HrPanel";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "admin",
        element: <AdminPanel />,
        children: [
          {
            path: "students",
            element: <h1 style={{ color: "white" }}>Upload Studentów </h1>,
          },
          {
            path: "hr",
            element: <h1 style={{ color: "white" }}>Dodaj Hr Formularz</h1>,
          },
        ],
      },
      {
        path: "hr",
        element: <HrPanel/>,
        children: [
          {
            path: "students",
            element: <h1 style={{ color: "white", zIndex: "-1" }}>Lista kurstantów</h1>,
          },
          {
            path: "talk",
            element: <h1 style={{ color: "white", zIndex: "-1" }}>Lista kursantów do rozmowy</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "/error",
    element: (
      <ErrorPage
        title="Błąd 500"
        message="Wystąpił problem, spróbuj ponownie za chwilę."
        buttonMessage="Powrót do strony głównej"
      />
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage message="Page not found - 404" />,
  },
]);
export const App = () => <RouterProvider router={routers} />;

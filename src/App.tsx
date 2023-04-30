import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "@pages/Error/ErrorPage";
import { LoginPage } from "@pages/Login/LoginPage";
import { NotFoundPage } from "@pages/NotFound404/NotFoundPage";
import { AppLayout } from "@layouts/AppLayout/AppLayout";
import { AdminPanel } from "@layouts/AdminPanel/AdminPanel";
import { PageRouter } from "@enums/page-router.enum";
import { checkAuth } from "@utils/checkAuth";
import { DragAndDrop } from "@components/DragAndDrop/DragAndDrop";
import { RegisterHRUser } from "@components/RegisterHRUser/RegisterHRUser";
import {StudentRegistration} from "@pages/StudentRegistration/StudentRegistration";

const routers = createBrowserRouter([
  {
    path: PageRouter.Main,
    loader: checkAuth,
    element: <AppLayout />,
    children: [
      {
        path: PageRouter.Admin,
        element: <AdminPanel />,
        children: [
          {
            path: PageRouter.AdminStudents,
            element: <DragAndDrop />,
          },
          {
            path: "hr",
            element: <RegisterHRUser />,
          },
        ],
      },
    ],
  },
  {
    path: PageRouter.Error,
    element: (
      <ErrorPage
        title="Błąd 500"
        message="Wystąpił problem, spróbuj ponownie za chwilę."
        buttonMessage="Powrót do strony głównej"
      />
    ),
  },
  {
    path: PageRouter.Login,
    element: <LoginPage />,
  },
  {
    path: PageRouter.StudentRegistration,
    // loader
    element: <StudentRegistration />,
  },
  {
    path: PageRouter.Everything,
    element: <NotFoundPage message="Page not found - 404" />,
  },
]);
export const App = () => <RouterProvider router={routers} />;

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
import { StudentRegistration } from "@pages/StudentRegistration/StudentRegistration";
import { getDataFrom } from "@utils/network/getDataFrom";
import { RequestPath } from "@enums/request-path.enum";
import { StudentPanel } from "@layouts/StudentPanel/StudentPanel";
import {HrPanel} from "@layouts/HrPanel/HrPanel";

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
            element: <DragAndDrop  text="abc"/>,
          },
          {
            path: PageRouter.AdminHr,
            element: <RegisterHRUser />,
          },
        ],
      },
      {
        path: PageRouter.Student,
        element: <StudentPanel />,
        children: [
          {
            path: PageRouter.StudentPanel,
            element: <h1>Panel studenta</h1>,
          },
          {
            path: PageRouter.StudentEdit,
            element: <h1>Edytuj CV</h1>,
          },
        ],
      },
      // {
      //   path: PageRouter.Hr,
      //   element: <HrPanel/>,
      //   children: [
      //     {
      //       path: PageRouter.HrStudents,
      //       element: <h1>Kursanci</h1>,
      //     },
      //     {
      //       path: PageRouter.HrTalk,
      //       element: <h1>Do rozmowy</h1>,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: PageRouter.StudentRegistration,
    loader: ({ params }) =>
        getDataFrom(`${RequestPath.GetOneStudent}${params.id}`),
    element: <StudentRegistration />,
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
    path: PageRouter.Hr,
    element: <HrPanel/>,
    children: [
      {
        path: PageRouter.HrStudents,
        element: <h1>Kursanci</h1>,
      },
      {
        path: PageRouter.HrTalk,
        element: <h1>Do rozmowy</h1>,
      },
    ],
  },
  {
    path: PageRouter.Everything,
    element: <NotFoundPage message="Page not found - 404" />,
  },
]);
export const App = () => <RouterProvider router={routers} />;

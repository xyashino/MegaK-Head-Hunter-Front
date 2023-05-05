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
import {EditCv} from "@pages/EditCv/EditCv";
import {Panel} from "@pages/Panel/Panel";
import {DisplayCv} from "@pages/DisplayCv/DisplayCv";
import {SendPwdReset} from "@pages/PwdReset/SendPwdReset";
import {PwdReset} from "@pages/PwdReset/PwdReset";

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
            element: <DragAndDrop  text='Test'/>,
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
            element: <Panel/>,
          },
          {
            path: PageRouter.StudentEdit,
            element: <EditCv/>,
          },
          {
            path: `/student/cv/:id`,
            loader: ({params}) =>
                getDataFrom(`${RequestPath.GetOneStudent}${params.id}`),
            element: <DisplayCv/>,
          }
        ],
      },
    ],
  },
  {
    path: PageRouter.StudentRegistration,
    loader: ({ params }) => getDataFrom(`${RequestPath.GetOneStudent}${params.id}`),
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
    path: PageRouter.SendPwdReset,
    element: <SendPwdReset/>
  },
  {
    path: PageRouter.PwdReset,
    element: <PwdReset/>
  },
  {
    path: PageRouter.Everything,
    element: <NotFoundPage message="Page not found - 404" />,
  },
]);
export const App = () => <RouterProvider router={routers} />;

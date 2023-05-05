import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "@pages/Error/ErrorPage";
import { LoginPage } from "@pages/Login/LoginPage";
import { NotFoundPage } from "@pages/NotFound/NotFoundPage";
import { AppLayout } from "@layouts/AppLayout/AppLayout";
import { PageRouter } from "@enums/page-router.enum";
import { checkAuth } from "@utils/checkAuth";
import { DragAndDrop } from "@components/DragAndDrop/DragAndDrop";
import { RegisterHRUser } from "@components/RegisterHRUser/RegisterHRUser";
import { StudentRegistrationPage } from "@pages/StudentRegistration/StudentRegistrationPage";
import { getDataFrom } from "@utils/network/getDataFrom";
import { RequestPath } from "@enums/request-path.enum";
import { EditCvPage } from "@pages/EditCv/EditCvPage";
import { Panel } from "@components/Panel/Panel";
import {
  ADMIN_BOOKMARKS,
  HR_BOOKMARKS,
  STUDENT_BOOKMARKS,
} from "@constants/Bookmarks";

const routers = createBrowserRouter([
  {
    path: PageRouter.Main,
    loader: checkAuth,
    element: <AppLayout />,
    children: [
      {
        path: PageRouter.Admin,
        element: <Panel accessRole="admin" bookmarks={ADMIN_BOOKMARKS} />,
        children: [
          {
            path: PageRouter.AdminStudents,
            element: <DragAndDrop text="Test" />,
          },
          {
            path: PageRouter.AdminHr,
            element: <RegisterHRUser />,
          },
        ],
      },
      {
        path: PageRouter.Student,
        element: <Panel accessRole="student" bookmarks={STUDENT_BOOKMARKS} />,
        children: [
          {
            path: PageRouter.StudentPanel,
            element: <h1>Panel studenta</h1>,
          },
          {
            path: PageRouter.StudentEdit,
            element: <EditCvPage />,
          },
        ],
      },
      {
        path: PageRouter.Hr,
        element: <Panel accessRole="hr" bookmarks={HR_BOOKMARKS} />,
        children: [
          {
            path: PageRouter.HrStudents,
            element: <h1>Lista Studentów</h1>,
          },
          {
            path: PageRouter.HrTalk,
            element: <h1>Lista Rozmów</h1>,
          },
        ],
      },
      {
        path: PageRouter.Cv,
        // loader
        element: <p>Zobacz Cv</p>,
      },
    ],
  },
  {
    path: PageRouter.StudentRegistration,
    loader: ({ params }) =>
      getDataFrom(`${RequestPath.GetOneStudent}${params.id}`),
    element: <StudentRegistrationPage />,
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
    path: PageRouter.Everything,
    element: <NotFoundPage message="Page not found - 404" />,
  },
]);
export const App = () => <RouterProvider router={routers} />;

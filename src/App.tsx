import React from "react";
import { DragAndDrop } from "@components/DragAndDrop/DragAndDrop";
import { Panel } from "@components/Panel/Panel";
import { RegisterHrUser } from "@components/RegisterHrUser/RegisterHrUser";
import {
  ADMIN_BOOKMARKS,
  HR_BOOKMARKS,
  STUDENT_BOOKMARKS,
} from "@constants/Bookmarks";
import { PageRouter } from "@enums/page-router.enum";
import { RequestPath } from "@enums/request-path.enum";
import { AppLayout } from "@layouts/AppLayout/AppLayout";
import { AccountPage } from "@pages/Account/AccountPage";
import { DisplayCvPage } from "@pages/DisplayCv/DisplayCvPage";
import { EditCvPage } from "@pages/EditCv/EditCvPage";
import { ErrorPage } from "@pages/Error/ErrorPage";
import { LoginPage } from "@pages/Login/LoginPage";
import { NotFoundPage } from "@pages/NotFound/NotFoundPage";
import { PwdForgotPage } from "@pages/PwdReset/PwdForgotPage";
import { PwdResetPage } from "@pages/PwdReset/PwdResetPage";
import { StudentPanelPage } from "@pages/StudentPanel/StudentPanelPage";
import { StudentRegistrationPage } from "@pages/StudentRegistration/StudentRegistrationPage";
import { checkAuth } from "@utils/checkAuth";
import { getDataFrom } from "@utils/network/getDataFrom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ValidateHRUser } from "@components/ValidateHRUser/ValidateHRUser";
import { StudentsPage } from "@pages/Students/StudentsPage";
import { TalksPage } from "@pages/Talk/TalksPage";

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
            element: <DragAndDrop text="Przeciągni upuść plik"  secondText='LUB kliknij TUTAJ'/>,
          },
          {
            path: PageRouter.AdminHr,
            element: <RegisterHrUser />,
          },
        ],
      },
      {
        path: PageRouter.Student,
        element: <Panel accessRole="student" bookmarks={STUDENT_BOOKMARKS} />,
        children: [
          {
            path: PageRouter.StudentPanel,
            element: <StudentPanelPage />,
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
            loader: () => getDataFrom(RequestPath.GetStudents),
            element: <StudentsPage />,
          },
          {
            path: PageRouter.HrTalk,
            loader: () => getDataFrom(RequestPath.GetInterview),
            element: <TalksPage />,
          },
        ],
      },
      {
        path: PageRouter.Account,
        element: <AccountPage />,
      },
      {
        path: PageRouter.Cv,
        loader: ({ params }) =>
          getDataFrom(`${RequestPath.GetOneStudent}${params.id}`),
        element: <DisplayCvPage />,
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
    path: PageRouter.HrRegistration,
    loader: ({ params }) => getDataFrom(`${RequestPath.GetOneHr}${params.id}`),
    element: <ValidateHRUser />,
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
    path: PageRouter.PwdForgot,
    element: <PwdForgotPage />,
  },
  {
    path: PageRouter.PwdReset,
    element: <PwdResetPage />,
  },
  {
    path: PageRouter.Everything,
    element: <NotFoundPage message="Page not found - 404" />,
  },
]);
export const App = () => <RouterProvider router={routers} />;

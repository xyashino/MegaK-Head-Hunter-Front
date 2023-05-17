export enum PageRouter {
  Main = "/",
  Login = "/login",
  Everything = "*",
  Account = "/account",
  BaseAdmin = "/admin/students",
  BaseStudent = "/student/panel",
  BaseHr = "/hr/students",

  Admin = "/admin",
  AdminHr = "/admin/hr",
  AdminStudents = "/admin/students",

  Student = "/student",
  StudentRegistration = "/student/register/:id",
  StudentPanel = "/student/panel",
  StudentEdit = "/student/edit",

  Hr = "/hr",
  HrStudents = "/hr/students",
  HrTalk = "/hr/talk",
  HrRegistration = "/hr/register/:id",

  Cv = "/cv/:id",
  GetCv = "/cv/",
  Error = "/error",
  PwdForgot = "/password/forgot",
  PwdReset = "/password/reset",
}

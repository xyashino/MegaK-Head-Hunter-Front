export enum PageRouter {
  Main = "/",
  Login = "/login",
  Everything = "*",
  Account = "/account",
  BaseAdmin = "/admin/students",
  BaseStudent = "/student/panel",
  BaseHr = "/student/students",

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

  Cv = "/cv/:id",

  Error = "/error",
  SendPwdReset = '/send-pwd-reset',
  PwdReset='/pwd-reset'
}
export enum PageRouter {
    Main = "/",
    Login = "/login",
    Admin = "/admin",
    AdminHr = "/admin/hr",
    AdminStudents = "/admin/students",
    StudentRegistration = '/student/register/:id',
    Error = "/error",
    Everything = "*",
    BaseAdmin = "/admin/students",
    Student = "/student",
    StudentPanel = "/student/panel",
    StudentEdit= "/student/edit",
    BaseStudent = "/student/panel",
    Account = '/account',
    SendPwdReset = '/send-pwd-reset',
    PwdReset='/pwd-reset'
}

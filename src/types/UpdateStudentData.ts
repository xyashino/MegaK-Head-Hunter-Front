import {StudentResponse} from "@backendTypes";

export type UpdateStudentData = Omit<
    StudentResponse,
    | "courseEngagement"
    | "courseCompletion"
    | "isActive"
    | "email"
    | "bonusProjectUrls"
    | "teamProjectDegree"
    | "userId"
    | "projectDegree"
>;
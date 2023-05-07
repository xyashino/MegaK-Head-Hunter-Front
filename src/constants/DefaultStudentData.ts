import { StudentRegisterRequest } from "@backendTypes";

export const DEFAULT_STUDENT_DATA: StudentRegisterRequest = {
  pwd: "",
  githubUsername: "",
  bio: "",
  canTakeApprenticeship: false,
  firstname: "",
  lastname: "",
  expectedSalary: "",
  courses: "",
  education: "",
  targetWorkCity: "",
  tel: "",
  expectedContractType: "Brak preferencji",
  monthsOfCommercialExp: 0,
  workExperience: "",
  expectedTypeWork: "Bez znaczenia",
  projectUrls: [],
  portfolioUrls: [],
};

import {createContext, Dispatch, SetStateAction} from "react";
import { StudentRegisterRequest } from "@backendTypes";
import {StepsActionData} from "../types/StepsActionData";
import {StepData} from "../types/StepData";

interface StudentRegistrationContextValue {
    step: StepData;
    dispatchStep: Dispatch<StepsActionData>;
    studentData: StudentRegisterRequest;
    setStudentData:Dispatch<SetStateAction<StudentRegisterRequest>>
}

const initialValue: StudentRegistrationContextValue = {
    step: {currentStep:1,maxStep:99,canProceedToNextStep:true,lastStep:1},
    dispatchStep: ()=>{},
    studentData: {
        firstname: "",
        lastname: "",
        tel: "",
        pwd:"",
        bio: "",
        targetWorkCity:"",
        githubUsername:"",
        monthsOfCommercialExp:0,
        canTakeApprenticeship:false,
        education: "",
        expectedSalary: "",
        workExperience:"",
        courses:"",
        expectedTypeWork: "Bez znaczenia",
        expectedContractType: "Brak preferencji",
        projectUrls: [],
        portfolioUrls: []
    },
    setStudentData:()=> {} ,
};

export const  StudentRegistrationContext = createContext<StudentRegistrationContextValue>(initialValue);
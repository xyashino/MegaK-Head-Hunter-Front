import {createContext, Dispatch, SetStateAction} from "react";
import { StudentRegisterRequest } from "@backendTypes";
import {StepsActionData} from "../types/StepsActionData";
import {StepData} from "../types/StepData";
import {DEFAULT_STUDENT_DATA} from "@constants/DefaultStudentData";

interface StudentRegistrationContextValue {
    step: StepData;
    dispatchStep: Dispatch<StepsActionData>;
    studentData: StudentRegisterRequest;
    setStudentData:Dispatch<SetStateAction<StudentRegisterRequest>>
}

const initialValue: StudentRegistrationContextValue = {
    step: {currentStep:1,maxStep:99,canProceedToNextStep:true,lastStep:1},
    dispatchStep: ()=>({}),
    studentData: DEFAULT_STUDENT_DATA,
    setStudentData:()=> ({}) ,
};

export const  StudentRegistrationContext = createContext<StudentRegistrationContextValue>(initialValue);
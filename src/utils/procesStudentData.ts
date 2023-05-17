import {StudentRegisterRequest, StudentUpdateRequest} from "@backendTypes";
import {UpdateStudentData} from "../types/UpdateStudentData";
const nullableKeys = ['workExperience', 'education', 'expectedSalary', 'targetWorkCity', 'tel']
export const processStudentData = <T extends StudentRegisterRequest | StudentUpdateRequest | Omit<UpdateStudentData, 'id'>>(obj: T): Partial<T> => {
    const filteredStudentData: Partial<T> = {};
    for (const key in obj) {
        if(nullableKeys.includes(key)) filteredStudentData[key] = undefined;
        if (obj[key]) {
            filteredStudentData[key] = obj[key];
        }
    }
    filteredStudentData.canTakeApprenticeship ??= false;
    filteredStudentData.monthsOfCommercialExp ??= 0;
    return filteredStudentData;
};
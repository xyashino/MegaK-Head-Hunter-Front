import {StudentRegisterRequest, StudentUpdateRequest} from "@backendTypes";
const nullableKeys = ['workExperience', 'education', 'expectedSalary', 'targetWorkCity', 'tel']
export const processStudentData = <T extends StudentRegisterRequest | StudentUpdateRequest>(obj: T): Partial<T> => {
    const filteredStudentData: Partial<T> = {};
    for (const key in obj) {
        if(nullableKeys.includes(key)) filteredStudentData[key] = null as any;
        if (obj[key]) {
            filteredStudentData[key] = obj[key];
        }
    }
    filteredStudentData.canTakeApprenticeship ??= false;
    return filteredStudentData;
};
import {StudentRegisterRequest, StudentUpdateRequest} from "@backendTypes";

export const processStudentData = <T extends StudentRegisterRequest | StudentUpdateRequest>(obj: T): Partial<T> => {
    const filteredStudentData: Partial<T> = {};
    for (const key in obj) {
        if (obj[key]) {
            filteredStudentData[key] = obj[key];
        }
    }
    filteredStudentData.canTakeApprenticeship ??= false;
    if (filteredStudentData.monthsOfCommercialExp === 0) {
        delete filteredStudentData.monthsOfCommercialExp;
    }
    return filteredStudentData;
};
import {FilterData} from "../../types/FilterData";
import {Rating} from "@enums/rating.enum";
import {QueryFiltration} from "../../types/QueryData";

export const buildFilterQuery = (filter: FilterData):QueryFiltration => {
    return {
        courseCompletion:
            filter.rating.find((el) => el.name === Rating.course)?.value ?? "",
        courseEngagement:
            filter.rating.find((el) => el.name === Rating.engagement)?.value ?? "",
        projectDegree:
            filter.rating.find((el) => el.name === Rating.project)?.value ?? "",
        teamProjectDegree:
            filter.rating.find((el) => el.name === Rating.scrum)?.value ?? "",
        minSalary: filter.salary.min,
        maxSalary: filter.salary.max,
        monthsOfCommercialExp: filter.monthOfExperience ?? "",
        canTakeApprenticeship: filter.canTakeApprenticeship ?? "",
        expectedTypeWork: filter.typeWork
            .filter((el) => el.isActive)
            .map((el) => el.value),
        expectedContractType: filter.contract
            .filter((el) => el.isActive)
            .map((el) => el.value),
    };
};
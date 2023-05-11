import { FilterAction } from "@enums/filter-action.enum";
import { ActiveValue, RatingData, SalaryData } from "./FilterData";
import { ExpectedContractTypeEnum, ExpectedTypeWorkEnum } from "@backendTypes";

export type FilterActionData =
    | { type: FilterAction.UpdateApprenticeship; payload: boolean | null}
    | { type: FilterAction.UpdateRating; payload: Omit<RatingData, "label"> }
    | { type: FilterAction.UpdateSalary; payload: SalaryData }
    | { type: FilterAction.UpdateContract; payload: ActiveValue<ExpectedContractTypeEnum> }
    | { type: FilterAction.UpdateTypeWork; payload: ActiveValue<ExpectedTypeWorkEnum> }
    | { type: FilterAction.UpdateMonth; payload: number | null }
    | { type: FilterAction.ResetAll; payload: undefined };

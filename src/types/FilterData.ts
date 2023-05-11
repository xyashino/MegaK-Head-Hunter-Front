import { ExpectedContractTypeEnum, ExpectedTypeWorkEnum } from "@backendTypes";
import { Rating } from "@enums/rating.enum";

export interface SalaryData {
  min: string;
  max: string;
}

export interface RatingData {
  name: Rating;
  label: string;
  value: number | null;
}

export interface ActiveValue<T> {
  isActive: boolean;
  value: T;
}

export interface FilterData {
  salary: SalaryData;
  rating: RatingData[];
  typeWork: ActiveValue<ExpectedTypeWorkEnum>[];
  canTakeApprenticeship: boolean | null;
  contract: ActiveValue<ExpectedContractTypeEnum>[];
  monthOfExperience: number | null;
}

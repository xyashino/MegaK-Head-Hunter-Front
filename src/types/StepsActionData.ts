import { StepAction } from "@enums/step-action.enum";
export interface StepsActionData {
  type: StepAction;
  payload?: any;
}

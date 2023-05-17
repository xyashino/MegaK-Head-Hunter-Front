import { StepAction } from "@enums/step-action.enum";
export type StepsActionData =
  | { type: StepAction.NextStep | StepAction.PrevStep }
  | {
      type: StepAction.CustomPage;
      payload: number;
    }
  | {
      type: StepAction.CanGetNextStep;
      payload: boolean;
    };

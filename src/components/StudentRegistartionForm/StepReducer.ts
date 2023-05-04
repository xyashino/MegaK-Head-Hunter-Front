import { StepAction } from "@enums/step-action.enum";
import { StepData } from "../../types/StepData";
import { StepsActionData } from "../../types/StepsActionData";

type Reducer = (state: StepData, action: StepsActionData) => StepData;

const goToPrevStep = (state: StepData): StepData =>
    state.currentStep === 1
        ? state
        : { ...state,canProceedToNextStep:true, currentStep: state.currentStep - 1 };

const goToNextStep = (state: StepData): StepData =>
    state.maxStep === state.currentStep || !state.canProceedToNextStep
        ? state
        : {
            maxStep:state.maxStep,
            currentStep: state.currentStep + 1,
            canProceedToNextStep: state.maxStep !== state.currentStep + 1,
            lastStep:
                state.lastStep > state.currentStep + 1
                    ? state.lastStep
                    : state.currentStep + 1,
        };

const goToCustomStep = (state: StepData, stepNumber: number): StepData =>
    (!stepNumber || (!state.canProceedToNextStep && state.currentStep < stepNumber) || stepNumber > state.lastStep + 1)
        ? state
        : {
            maxStep:state.maxStep,
            currentStep: stepNumber,
            canProceedToNextStep: state.maxStep !== stepNumber,
            lastStep:
                state.lastStep > state.currentStep + 1
                    ? state.lastStep
                    : state.currentStep + 1,
        };

const setCanProceedToNextStep = (state: StepData, canProceed: boolean): StepData => ({
    ...state,
    canProceedToNextStep: canProceed,
});

export const stepReducer: Reducer = (state, action) => {
    switch (action.type) {
        case StepAction.PrevStep:
            return goToPrevStep(state);
        case StepAction.NextStep:
            return goToNextStep(state);
        case StepAction.CustomPage:
            return goToCustomStep(state, action.payload);
        case StepAction.CanGetNextStep:
            return setCanProceedToNextStep(state, action.payload);
        default:
            return state;
    }
};

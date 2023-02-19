import { createContext, useReducer } from "react";
import type { Dispatch } from "react";
import type { SetPage, progressAction } from "../types/progressContext";

export type gender = "MALE" | "FEMALE" | "OTHER";
export type experience = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type fitnessGoal = "SIZE" | "STRENGTH";
export type nutritionGoal = "BULKING" | "CUTTING";

interface onboardingState {
  gender?: gender;
  age?: number;
  weight?: number;
  height?: number;
  experience?: experience;
  fitnessGoal?: fitnessGoal;
  nutritionGoal?: nutritionGoal;
  weightGoal?: number;
  currentPage: number;
}

interface pageOneVals {
  gender: gender;
  age: number;
  weight: number;
  height: number;
  experience: experience;
}

interface pageTwoVals {
  fitnessGoal: fitnessGoal;
  nutritionGoal: nutritionGoal;
  weightGoal: number;
}

type action = "PAGE_TWO_INSERT" | progressAction;

type payload = pageOneVals | pageTwoVals | SetPage;

interface onboardingAction {
  type: action;
  payload: payload;
}

interface onboardingValue {
  progressData: onboardingState;
  progressDispatch: Dispatch<onboardingAction>;
}

export const OnboaringContext = createContext({} as onboardingValue);

const isPageOneVals = (p: payload): p is pageOneVals => {
  return (p as pageOneVals).gender !== undefined;
};

const isPageTwoVals = (p: payload): p is pageTwoVals => {
  return (p as pageTwoVals).fitnessGoal !== undefined;
};

const onboardingReducer = (
  state: onboardingState,
  action: onboardingAction
) => {
  const { type, payload } = action;

  switch (type) {
    case "PAGE_ONE_INSERT":
      if (isPageOneVals(payload)) {
        return {
          ...state,
          gender: payload.gender,
          age: payload.age,
          weight: payload.weight,
          height: payload.height,
          experience: payload.experience,
          currentPage: 2,
        };
      }
    case "PAGE_TWO_INSERT":
      if (isPageTwoVals(payload)) {
        return {
          ...state,
          fitnessGoal: payload.fitnessGoal,
          nutritionGoal: payload.nutritionGoal,
          weightGoal: payload.weightGoal,
          currentPage: 3,
        };
      }
    case "PAGE_CHANGE":
      if (typeof payload === "number") {
        return { ...state, currentPage: payload };
      }
    default:
      return { ...state };
  }
};

const initalState: onboardingState = {
  gender: undefined,
  age: undefined,
  weight: undefined,
  height: undefined,
  experience: undefined,
  fitnessGoal: undefined,
  nutritionGoal: undefined,
  weightGoal: undefined,
  currentPage: 1,
};

export const OnboardingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [progressData, progressDispatch] = useReducer(
    onboardingReducer,
    initalState
  );

  return (
    <OnboaringContext.Provider value={{ progressData, progressDispatch }}>
      {children}
    </OnboaringContext.Provider>
  );
};

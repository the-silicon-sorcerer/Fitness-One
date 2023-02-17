"use client";

import { createContext, useReducer, Dispatch } from "react";
import ProgressLayout from "../../../components/(layouts)/progressLayout/progressLayout.component";

type gender = "MALE" | "FEMALE";
type experience = "BERGINER" | "INTERMEDIATE" | "ADVANCED";
type fitnessGoal = "SIZE" | "STRENGTH";
type nutritionGoal = "BULKING" | "CUTTING";

interface onboardingState {
  gender?: gender;
  age?: number;
  weight?: number;
  height?: number;
  experience?: experience;
  fitnessGoal?: fitnessGoal;
  nutritionGoal?: nutritionGoal;
  currentPage: number;
}

interface onboardingAction {
  type: string;
  payload: {};
}

interface onboardingValue {
  userData: onboardingState;
  userDispatch: Dispatch<onboardingAction>;
}

const OnboaringContext = createContext({} as onboardingValue);

const onboardingReducer = (
  state: onboardingState,
  action: onboardingAction
) => {
  switch (action.type) {
    case "pageOne":
      return { ...state };
    case "pageTwo":
      return { ...state };
    case "previous":
      return { ...state };
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
  currentPage: 1,
};

const OnboardingProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, userDispatch] = useReducer(onboardingReducer, initalState);

  return (
    <OnboaringContext.Provider value={{ userData, userDispatch }}>
      {children}
    </OnboaringContext.Provider>
  );
};

const onboardingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <OnboardingProvider>
      <ProgressLayout events={3}>{children}</ProgressLayout>
    </OnboardingProvider>
  );
};

export default onboardingLayout;

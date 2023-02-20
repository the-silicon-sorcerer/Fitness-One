"use client";

import { createContext, useReducer } from "react";
import type { Dispatch } from "react";
import type { SetPage, ProgressType } from "../types/progressContext";

export type Gender = "MALE" | "FEMALE" | "OTHER";
export type Experience = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type FitnessGoal = "SIZE" | "STRENGTH";
export type NutritionGoal = "BULKING" | "CUTTING";

interface OnboardingState {
  gender?: Gender;
  age?: number;
  weight?: number;
  height?: number;
  experience?: Experience;
  fitnessGoal?: FitnessGoal;
  nutritionGoal?: NutritionGoal;
  weightGoal?: number;
  currentPage: number;
}

interface OnboardingAction {
  type: ProgressType;
  payload: OnboardingState | SetPage;
}

interface onboardingValue {
  progressData: OnboardingState;
  progressDispatch: Dispatch<OnboardingAction>;
}

export const OnboaringContext = createContext({} as onboardingValue);

const onboardingReducer = (
  state: OnboardingState,
  action: OnboardingAction
) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_DATA":
      if (typeof payload !== "number") {
        return {
          ...state,
          gender: payload.gender,
          age: payload.age,
          weight: payload.weight,
          height: payload.height,
          experience: payload.experience,
          fitnessGoal: payload.fitnessGoal,
          nutritionGoal: payload.nutritionGoal,
          weightGoal: payload.weightGoal,
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

const initalState: OnboardingState = {
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

"use client";

import { createContext, useReducer } from "react";
import type { Dispatch } from "react";
import z from "zod";

interface MealContextValue {
  formState: MealContextState;
  formDispatch: Dispatch<MealAction>;
}

export const MealContext = createContext({} as MealContextValue);

type Meal = "BREAKEFAST" | "LUNCH" | "DINNER";

export interface MealContextState {
  food?: string;
  servings?: number;
  meal?: Meal;
  category?: string;
}

export const submitSchemea = z.object({
  food: z.string(),
  servings: z.number().max(99),
  meal: z.union([
    z.literal("BRAKEFAST"),
    z.literal("LUNCH"),
    z.literal("DINNER"),
    z.literal("SNACK"),
  ]),
  category: z.string(),
});

type MealActionType = "SET_DATA" | "SET_CATEGORY";

interface MealAction {
  type: MealActionType;
  payload: MealContextState;
}

const MealReducer = (state: MealContextState, action: MealAction) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DATA":
      return {
        ...state,
        food: payload.food || state.food,
        servings: payload.servings || state.servings,
        meal: payload.meal || state.meal,
      };
    case "SET_CATEGORY": {
      return {
        ...state,
        category: payload.category,
      };
    }
    default:
      return { ...state };
  }
};

const initalState: MealContextState = {
  food: undefined,
  servings: undefined,
  meal: undefined,
  category: "MEATS",
};

export const MealContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formState, formDispatch] = useReducer(MealReducer, initalState);

  return (
    <MealContext.Provider value={{ formState, formDispatch }}>
      {children}
    </MealContext.Provider>
  );
};

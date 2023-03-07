"use client";

import { createContext, useReducer, useEffect } from "react";
import {
  ProgressAction,
  ProgressStateValue,
  ProgressValue,
} from "../../types/progressContext";
import isMutation from "../../utils/isMutation";
import z from "zod";
import { trpc } from "../../utils/trpcProvider";

export interface NutritionPlanValues {
  calories?: number;
  protein?: number;
  fat?: number;
  carbs?: number;
  water?: number;
}

interface NutritionContextState
  extends ProgressStateValue,
    NutritionPlanValues {}

export const NutritionSchema = z.object({
  calories: z.number(),
  protein: z.number(),
  fat: z.number(),
  carbs: z.number(),
  water: z.number(),
});

export const NutritionSetupContext = createContext(
  {} as ProgressValue<NutritionContextState>
);

const nutritionReducer = (
  state: NutritionContextState,
  action: ProgressAction<NutritionContextState>
) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DATA":
      if (typeof payload !== "number" && !isMutation(payload)) {
        return {
          ...state,
          calories: payload.calories,
          protein: payload.protein,
          fat: payload.fat,
          carbs: payload.carbs,
          water: payload.water,
        };
      }
      return { ...state };
    case "SET_MUTATION":
      if (typeof payload !== "number" && isMutation(payload)) {
        return {
          ...state,
          mutation: payload,
        };
      }
    case "PAGE_CHANGE":
      if (typeof payload === "number") {
        return {
          ...state,
          currentPage: payload,
        };
      }
    default:
      return state;
  }
};

const initalState: NutritionContextState = {
  calories: undefined,
  protein: undefined,
  fat: undefined,
  carbs: undefined,
  water: undefined,
  currentPage: 1,
  mutation: undefined,
  stateSchema: NutritionSchema,
};

export const NutritionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formState, formDispatch] = useReducer(nutritionReducer, initalState);
  const mutation = trpc.setup.nutritionPlan.useMutation();

  useEffect(() => {
    formDispatch({ type: "SET_MUTATION", payload: mutation });
  }, []);

  return (
    <NutritionSetupContext.Provider value={{ formState, formDispatch }}>
      {children}
    </NutritionSetupContext.Provider>
  );
};

"use client";

import { createContext, useReducer, useEffect } from "react";
import z from "zod";

import {
  ProgressAction,
  ProgressStateValue,
  ProgressValue,
} from "../../types/progressContext";
import isMutation from "../../utils/isMutation";
import { trpc } from "../../utils/trpcProvider";

type Avalible_Splits = "PPL" | "ARNOLD" | "BRO_SPLIT" | "CUSTOM";

interface FitnessSetupContextState extends ProgressStateValue {
  split?: Avalible_Splits;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

export const FitnessSchema = z.object({
  split: z.union([
    z.literal("PPL"),
    z.literal("ARNOLD"),
    z.literal("BRO_SPLIT"),
    z.literal("CUSTOM"),
  ]),
  monday: z.string().min(1),
  tuesday: z.string().min(1),
  wednesday: z.string().min(1),
  thursday: z.string().min(1),
  friday: z.string().min(1),
  saturday: z.string().min(1),
  sunday: z.string().min(1),
});

export const FitnessSetupContext = createContext(
  {} as ProgressValue<FitnessSetupContextState>
);

const fitnessSetupReducer = (
  state: FitnessSetupContextState,
  action: ProgressAction<FitnessSetupContextState>
) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DATA":
      if (typeof payload !== "number" && !isMutation(payload)) {
        return {
          ...state,
          split: payload.split,
          monday: payload.monday,
          tuesday: payload.tuesday,
          wednesday: payload.wednesday,
          thursday: payload.thursday,
          friday: payload.friday,
          saturday: payload.saturday,
          sunday: payload.sunday,
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

const initalState: FitnessSetupContextState = {
  split: undefined,
  monday: undefined,
  tuesday: undefined,
  wednesday: undefined,
  thursday: undefined,
  friday: undefined,
  saturday: undefined,
  sunday: undefined,
  currentPage: 1,
  mutation: undefined,
  stateSchema: FitnessSchema,
};

export const FitnessSetupContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [progressData, progressDispatch] = useReducer(
    fitnessSetupReducer,
    initalState
  );
  const mutation = trpc.setup.fitnessPlan.useMutation();

  useEffect(() => {
    progressDispatch({ type: "SET_MUTATION", payload: mutation });
  }, []);

  return (
    <FitnessSetupContext.Provider value={{ progressData, progressDispatch }}>
      {children}
    </FitnessSetupContext.Provider>
  );
};

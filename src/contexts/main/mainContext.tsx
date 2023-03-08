"use client";

import React, { createContext, useReducer, useEffect } from "react";

import { trpc } from "../../utils/trpcProvider";
import type { FitnessPlanValues } from "../fitnessSetupContext/fitnessContext";
import type { NutritionPlanValues } from "../nutritionSetupContext/nutritionSetupContext";

type Pages = "DASHBOARD" | "FITNESS" | "NUTRITION" | "PROFILE";

interface MainState {
  currentPage?: Pages;
  fitnessPLan?: FitnessPlanValues;
  nutritionPlan?: NutritionPlanValues;
  isLoading: boolean;
}

interface MainContextValue {
  mainState: MainState;
  mainDispatch: React.Dispatch<MainAction>;
}

export const MainContext = createContext({} as MainContextValue);

interface PageObject {
  page: Pages;
}
interface DataOject {
  fitnessPlan?: FitnessPlanValues;
  nutritionPlan?: NutritionPlanValues;
}

type MainTypes = "SET_PAGE" | "LOAD_DATA" | "SET_LOADING";
type MainPayload = PageObject | boolean | DataOject;

interface MainAction {
  type: MainTypes;
  payload: MainPayload;
}

const isDataObject = (obj: PageObject | DataOject): obj is DataOject => {
  return (obj as DataOject).fitnessPlan !== null;
};

const isPageObject = (obj: PageObject | DataOject): obj is PageObject => {
  return (obj as PageObject).page !== undefined;
};

const MainReducer = (state: MainState, action: MainAction) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_DATA":
      if (typeof payload !== "boolean" && isDataObject(payload)) {
        return {
          ...state,
          fitnessPLan: payload.fitnessPlan,
          nutritionPlan: payload.nutritionPlan,
        };
      }
    case "SET_PAGE":
      if (typeof payload !== "boolean" && isPageObject(payload)) {
        return {
          ...state,
          currentPage: payload.page,
        };
      }
      return { ...state };
    case "SET_LOADING":
      if (typeof payload === "boolean") {
        return {
          ...state,
          isLoading: payload,
        };
      }
    default:
      return state;
  }
};

const initalState: MainState = {
  currentPage: undefined,
  fitnessPLan: undefined,
  nutritionPlan: undefined,
  isLoading: true,
};

export const MainContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mainState, mainDispatch] = useReducer(MainReducer, initalState);
  const userData = trpc.userRouter.getUserData.useQuery();

  useEffect(() => {
    mainDispatch({ type: "SET_LOADING", payload: true });
    if (userData.isSuccess) {
      mainDispatch({
        type: "LOAD_DATA",
        payload: {
          fitnessPlan: userData.data?.Fitness_Plan[0],
          nutritionPlan: userData.data?.Nutrition_Plan[0],
        },
      });
      mainDispatch({ type: "SET_LOADING", payload: false });
    }
  }, [userData.data]);

  return (
    <MainContext.Provider value={{ mainState, mainDispatch }}>
      {children}
    </MainContext.Provider>
  );
};

"use client";

import React, { createContext, useReducer } from "react";

type Pages = "DASHBOARD" | "FITNESS" | "NUTRITION" | "PROFILE";

interface MainState {
  currentPage?: Pages;
  userSetup: boolean;
}

interface MainContextValue {
  mainState: MainState;
  mainDispatch: React.Dispatch<MainAction>;
}

export const MainContext = createContext({} as MainContextValue);

type MainTypes = "SET_PAGE";
type MainPayload = { page: Pages };

interface MainAction {
  type: MainTypes;
  payload: MainPayload;
}

const MainReducer = (state: MainState, action: MainAction) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_PAGE":
      return {
        ...state,
        currentPage: payload.page,
      };
    default:
      return state;
  }
};

const initalState = {
  currentPage: undefined,
  userSetup: false,
};

export const MainContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mainState, mainDispatch] = useReducer(MainReducer, initalState);

  return (
    <MainContext.Provider value={{ mainState, mainDispatch }}>
      {children}
    </MainContext.Provider>
  );
};

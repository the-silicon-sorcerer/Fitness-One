import { createContext, useReducer } from "react";
import {
  ProgressAction,
  ProgressStateValue,
} from "../../types/progressContext";
import isMutation from "../../utils/isMutation";

interface SetupContextState extends ProgressStateValue {
  val: string;
}

const SetupContext = createContext({});

const setupReducer = (
  state: SetupContextState,
  action: ProgressAction<SetupContextState>
) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DATA":
      if (typeof payload !== "number" && !isMutation(payload)) {
        return {
          ...state,
        };
      }
      return { ...state };
    case "SET_MUTATION":
      if (typeof payload !== "number" && isMutation(payload)) {
        return {
          ...state,
        };
      }
    case "PAGE_CHANGE":
      if (typeof payload === "number") {
        return {
          ...state,
        };
      }
    default:
      return state;
  }
};

const initalState = {};

export const SetupContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [] = useReducer(setupReducer, {} as SetupContextState);

  return <SetupContext.Provider value={{}}></SetupContext.Provider>;
};

import type { Dispatch } from "react";
import type { UseTRPCMutationResult } from "@trpc/react-query/shared";

export type SetPage = number;

export type ProgressType = "SET_DATA" | "PAGE_CHANGE";

interface ProgressAction {
  type: ProgressType;
  payload: SetPage;
}

// used to extand any contextStateType

export interface ProgressStateValue {
  currentPage: number;
  mutation?: UseTRPCMutationResult<any, any, any, any>;
}

// for components utalizing progressConext

export interface ProgressContextValue {
  progressData: {
    currentPage: number;
    mutation: UseTRPCMutationResult<any, any, any, any>;
  };
  progressDispatch: Dispatch<ProgressAction>;
}

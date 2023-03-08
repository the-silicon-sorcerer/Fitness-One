import type { Dispatch } from "react";
import type { UseTRPCMutationResult } from "@trpc/react-query/shared";
import type z from "zod";

export type SetPage = number;

export type ProgressType = "SET_DATA" | "PAGE_CHANGE" | "SET_MUTATION";

// used to extand any contextStateType

export interface ProgressStateValue {
  currentPage: number;
  mutation?: UseTRPCMutationResult<any, any, any, any>;
  stateSchema: z.ZodObject<any>;
}

export interface ProgressAction<T> {
  type: ProgressType;
  payload: T | SetPage | UseTRPCMutationResult<any, any, any, any>;
}

export interface ProgressValue<T> {
  formState: T;
  formDispatch: Dispatch<ProgressAction<T>>;
}

// for components utalizing progressConext

interface DispatchAction {
  type: ProgressType;
  payload: SetPage;
}

export interface ProgressContextValue {
  formState: {
    currentPage: number;
    mutation: UseTRPCMutationResult<any, any, any, any>;
    stateSchema: z.ZodObject<any>;
  };
  formDispatch: Dispatch<DispatchAction>;
}

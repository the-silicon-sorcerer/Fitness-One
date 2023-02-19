import type { Dispatch } from "react";

export type SetPage = number;

export type ProgressType = "SET_DATA" | "PAGE_CHANGE";

interface ProgressAction {
  type: ProgressType;
  payload: SetPage;
}

export interface ProgressContextValue {
  progressData: {
    currentPage: number;
    [key: string]: string | number;
  };
  progressDispatch: Dispatch<ProgressAction>;
}

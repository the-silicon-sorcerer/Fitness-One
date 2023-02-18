import type { Dispatch } from "react";

export type SetPage = number;

export type progressAction = "PAGE_ONE_INSERT" | "PAGE_CHANGE";

interface ProgressAction {
  type: progressAction;
  payload: SetPage;
}

export interface ProgressContextValue {
  progressData: {
    currentPage: number;
  };
  progressDispatch: Dispatch<ProgressAction>;
}

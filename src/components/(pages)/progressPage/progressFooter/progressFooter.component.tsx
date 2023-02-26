"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { trpc } from "../../../../utils/trpcProvider";
import type { Context } from "react";

import { ProgressContextValue } from "../../../../types/progressContext";
import { BackIconSmall } from "../../../(svg)";
import { NextIconSmall } from "../../../(svg)";

import style from "./progressFooter.module.css";

interface ProgressFooterProps {
  context: Context<ProgressContextValue>;
  events: number;
}

const ProgressFooter = ({ context, events }: ProgressFooterProps) => {
  const { progressData, progressDispatch } = useContext(context);
  const router = useRouter();

  const onPrevious = () => {
    if (progressData.currentPage > 1) {
      if (typeof window !== "undefined") window.scrollTo(0, 0);
      progressDispatch({
        payload: progressData.currentPage - 1,
        type: "PAGE_CHANGE",
      });
    }
  };

  const onContinue = () => {
    if (progressData.currentPage < events) {
      if (typeof window !== "undefined") window.scrollTo(0, 0);
      progressDispatch({
        payload: progressData.currentPage + 1,
        type: "PAGE_CHANGE",
      });
    }
  };

  const onFinish = () => {
    if (progressData.stateSchema.safeParse(progressData).success) {
      progressData.mutation.mutate(progressData);
      router.push("/");
    }
  };

  return (
    <div className={style.footer}>
      {progressData.currentPage > 1 ? (
        <div className={style.previous} onClick={() => onPrevious()}>
          <BackIconSmall style={{ fill: "var(--bg-600)" }} />
          <p className="body-B-Small">Previous</p>
        </div>
      ) : (
        <div className={style.previous}></div>
      )}
      <div
        className={style.next}
        onClick={
          progressData.currentPage === events
            ? () => onFinish()
            : () => onContinue()
        }
      >
        <p className="body-B-Medium">
          {progressData.currentPage === events ? "Finish" : "Continue"}
        </p>
        <NextIconSmall style={{ fill: "var(--bg-800)" }} />
      </div>
    </div>
  );
};

export default ProgressFooter;

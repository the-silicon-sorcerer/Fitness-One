"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import type { Context } from "react";

import { BackIconSmall } from "../../../(svg)";
import { NextIconSmall } from "../../../(svg)";
import type { ProgressContextValue } from "../../../../types/progressContext";

import style from "./progressFooter.module.css";

interface ProgressFooterProps {
  context: Context<ProgressContextValue>;
  events: number;
}

const ProgressFooter = ({ context, events }: ProgressFooterProps) => {
  const { formState, formDispatch } = useContext(context);
  const router = useRouter();

  const onPrevious = () => {
    if (formState.currentPage > 1) {
      if (typeof window !== "undefined") window.scrollTo(0, 0);
      formDispatch({
        payload: formState.currentPage - 1,
        type: "PAGE_CHANGE",
      });
    }
  };

  const onContinue = () => {
    if (formState.currentPage < events) {
      if (typeof window !== "undefined") window.scrollTo(0, 0);
      formDispatch({
        payload: formState.currentPage + 1,
        type: "PAGE_CHANGE",
      });
    }
  };

  const onFinish = () => {
    if (formState.stateSchema.safeParse(formState).success) {
      formState.mutation.mutate(formState);
      router.push("/");
    }
  };

  return (
    <div className={style.footer}>
      {formState.currentPage > 1 ? (
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
          formState.currentPage === events
            ? () => onFinish()
            : () => onContinue()
        }
      >
        <p className="body-B-Medium">
          {formState.currentPage === events ? "Finish" : "Continue"}
        </p>
        <NextIconSmall style={{ fill: "var(--bg-800)" }} />
      </div>
    </div>
  );
};

export default ProgressFooter;

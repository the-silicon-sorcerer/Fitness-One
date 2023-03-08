"use client";

import { useContext } from "react";
import type { Context } from "react";
import type { ProgressContextValue } from "../../../../types/progressContext";

import style from "./progressBar.module.css";

interface ProgressBarProps {
  events: number;
  context: Context<ProgressContextValue>;
}

const ProgressBar = ({ events, context }: ProgressBarProps) => {
  const { formState } = useContext(context);

  const createEvents = () => {
    const indicators = [];
    for (let i = 1; i <= events; i++) {
      if (i <= formState.currentPage) {
        indicators.push(
          <div
            style={{ backgroundColor: "var(--bg-600)" }}
            key={i}
            className={style.indicator}
          ></div>
        );
      } else {
        indicators.push(<div key={i} className={style.indicator}></div>);
      }
    }
    return indicators;
  };

  return <div className={style.progress}>{createEvents()}</div>;
};

export default ProgressBar;

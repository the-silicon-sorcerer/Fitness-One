"use client";

import { Context, useContext } from "react";
import { ProgressContextValue } from "../../../types/progressContext";

import style from "./progressBar.module.css";

interface ProgressBarProps {
  events: number;
  context: Context<ProgressContextValue>;
}

const ProgressBar = ({ events, context }: ProgressBarProps) => {
  const { progressData } = useContext(context);

  const createEvents = () => {
    const indicators = [];
    for (let i = 1; i <= events; i++) {
      if (i <= progressData.currentPage) {
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

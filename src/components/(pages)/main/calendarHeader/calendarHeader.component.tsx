"use client";

import moment from "moment";
import type { Dispatch } from "react";

import DateBox from "../dateBox/dateBox.component";

import style from "./calendarHeader.module.css";

interface CalendarHeaderProps {
  date: moment.Moment;
  setDate: Dispatch<moment.Moment>;
}

const CalendarHeader = ({ date, setDate }: CalendarHeaderProps) => {
  const generateDates = () => {
    const arr = [];
    for (
      let i = 0;
      moment().startOf("week").day(i).format("DD/MM/YYYY") !==
      moment().endOf("week").add(1, "day").format("DD/MM/YYYY");
      i++
    ) {
      const currDate = moment().startOf("week").day(i);
      arr.push(
        <DateBox
          key={currDate.format("DD/MM/YYYY")}
          fill={
            currDate.format("DD/MM/YYYY") === date.format("DD/MM/YYYY")
              ? "var(--bg-600)"
              : undefined
          }
          date={currDate.format("DD")}
          day={currDate.day(i).format("ddd")}
          onClick={() => setDate(currDate)}
        />
      );
    }
    return arr;
  };

  return <div className={style.container}>{generateDates()}</div>;
};

export default CalendarHeader;

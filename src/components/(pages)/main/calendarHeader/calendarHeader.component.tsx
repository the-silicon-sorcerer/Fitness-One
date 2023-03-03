import moment from "moment";

import style from "./calendarHeader.module.css";
import DateBox from "../dateBox/dateBox.component";
import { date } from "zod";

// {moment().endOf("weeks").format("DD/MM/YYYY")}

const CalendarHeader = () => {
  const generateDates = () => {
    const arr = [];
    for (
      let i = 0;
      moment().startOf("week").day(i).format("DD/MM/YYYY") !==
      moment().endOf("week").add(1, "day").format("DD/MM/YYYY");
      i++
    ) {
      arr.push(
        <DateBox
          fill={
            moment().startOf("weeks").day(i).format("DD/MM/YYYY") ===
            moment().format("DD/MM/YYYY")
              ? "var(--bg-600)"
              : undefined
          }
          date={moment().startOf("weeks").day(i).format("DD")}
          day={moment().startOf("weeks").day(i).format("ddd")}
        />
      );
    }
    return arr;
  };

  return <div className={style.container}>{generateDates()}</div>;
};

export default CalendarHeader;

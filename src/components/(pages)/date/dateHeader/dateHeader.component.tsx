"use client";

import { useState } from "react";
import moment from "moment";
import Link from "next/link";

import { BackArrowIcon } from "../../../(svg)";
import BoxIcon from "../../../(elements)/boxIcon/boxIcon.component";

import style from "./dateHeader.module.css";

const DateHeader = () => {
  const [date] = useState(moment());

  return (
    <div className={style.container}>
      <Link href="/nutrition">
        <BoxIcon
          size="32px"
          Icon={BackArrowIcon}
          bg
          backgroundColor="var(--bg-700)"
          fill="var(--bg-600)"
        />
      </Link>
      <p className="body-B-Medium">{date.format("dddd MMMM Do")}</p>
    </div>
  );
};

export default DateHeader;

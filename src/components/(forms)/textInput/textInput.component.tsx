"use client";

import React from "react";

import style from "./textInput.module.css";
import SvgIcon from "../../svgIcon/svgIcon.component";

interface TextInputProps {
  ref: React.MutableRefObject<HTMLInputElement>;
  placeholder: string;
  Icon: any;
}

const TextInput = ({ ref, placeholder, Icon }: TextInputProps) => {
  return (
    <div className={style.container}>
      <SvgIcon Icon={Icon} size="30px" />
      <input ref={ref} type={"text"} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;

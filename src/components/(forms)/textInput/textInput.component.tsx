"use client";

import React from "react";
import { forwardRef } from "react";

import style from "./textInput.module.css";

interface TextInputProps {
  ref: React.MutableRefObject<HTMLInputElement>;
  placeholder: string;
  Icon: any;
}

const TextInput = forwardRef(
  (
    { placeholder, Icon }: TextInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={style.container}>
        <Icon />
        <input ref={ref} type={"text"} placeholder={placeholder} />
      </div>
    );
  }
);

export default TextInput;

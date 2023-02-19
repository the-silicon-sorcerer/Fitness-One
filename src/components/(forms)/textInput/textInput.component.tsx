"use client";

import React from "react";
import { forwardRef, ForwardedRef } from "react";

import style from "./textInput.module.css";

interface TextInputProps {
  ref: ForwardedRef<any> | React.MutableRefObject<any>;
  placeholder: string;
  Icon: any;
}

const TextInput = forwardRef(
  ({ placeholder, Icon }: TextInputProps, ref: React.ForwardedRef<any>) => {
    function isCurrent<T>(
      r: React.MutableRefObject<T> | ((instance: T | null) => void)
    ): r is React.MutableRefObject<T> {
      return (r as React.MutableRefObject<T>).current !== undefined;
    }

    const setRef = (
      text: string | null,
      ref: ForwardedRef<any> | React.MutableRefObject<any>
    ) => {
      const input = text!.toUpperCase();
      if (isCurrent(ref!)) ref.current.inputVal = input;
    };

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRef(e.target.value, ref);
    };

    return (
      <div className={style.container}>
        <Icon />
        <input
          type={"text"}
          placeholder={placeholder}
          onChange={onChangeHandle}
        />
      </div>
    );
  }
);

export default TextInput;

"use client";

import React from "react";
import { useRef, useEffect, useContext, useState } from "react";
import type { Dispatch, SetStateAction, Context } from "react";

import style from "./textInput.module.css";

interface TextInputProps {
  placeholder: string;
  Icon: any;
  type: "text" | "number";
  field: string;
  currState: object;
  setState: Dispatch<SetStateAction<any>>;
  context: Context<any>;
}

const TextInput = ({
  placeholder,
  Icon,
  type,
  setState,
  currState,
  field,
  context,
}: TextInputProps) => {
  const inpRef = useRef({} as HTMLInputElement);
  const { progressData } = useContext(context);
  const currVal: string = progressData[field as keyof typeof progressData];

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...currState, [field]: e.target.value });
  };

  return (
    <div className={style.container}>
      <Icon />
      <input
        ref={inpRef}
        onChange={onChangeHandle}
        type={type}
        placeholder={currVal ? currVal : placeholder}
      />
    </div>
  );
};

export default TextInput;

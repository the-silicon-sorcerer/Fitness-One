"use client";

import type { Dispatch, SetStateAction, Context } from "react";
import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { DropIcon } from "../../(svg)";

import style from "./dropInput.module.css";

export interface DropInputProps {
  Icon: any;
  placeholder: string;
  options: string[];
  field: string;
  currState: object | { [key: string]: string };
  setState: Dispatch<SetStateAction<any>>;
  context: Context<any>;
  value?: { text: string; value: string }[];
}

const DropInput = ({
  Icon,
  placeholder,
  options,
  field,
  currState,
  setState,
  context,
  value,
}: DropInputProps) => {
  const [menuOpen, setMenu] = useState(false);
  const [selected, setSelected] = useState<undefined | string>(undefined);
  const { progressData } = useContext(context);
  const currVal = progressData[field as keyof typeof progressData];

  useEffect(() => {
    options.forEach((text) => {
      if (currVal && text.toLowerCase() === currVal.toLowerCase()) {
        setSelected(text);
      }
    });
  }, []);

  const onSelect = (text: string | undefined) => {
    if (value) {
      for (const obj of value) {
        if (text === obj.text) {
          return setState({ ...currState, [field]: obj.value });
        }
      }
    }
    if (text) setState({ ...currState, [field]: text.toUpperCase() });
    else setState({ ...currState, [field]: undefined });
  };

  const generateOptions = options.map((text) => {
    return (
      <div
        key={uuidv4()}
        style={{
          border: text === selected ? "2px solid var(--bg-600)" : undefined,
        }}
        className={style.option}
        onClick={() => {
          if (selected !== text) {
            setSelected(text);
            onSelect(text);
          } else {
            setSelected(undefined);
            onSelect(undefined);
          }
        }}
      >
        <p className="body-B-Medium">{text}</p>
      </div>
    );
  });

  return (
    <div className={style.container}>
      <div className={style.main} onClick={() => setMenu(!menuOpen)}>
        <div className={style.text}>
          <Icon />
          <p className="body-B-Medium">{placeholder}</p>
        </div>
        <DropIcon
          style={{ transform: menuOpen ? "rotate(180deg)" : undefined }}
        />
      </div>
      {menuOpen ? (
        <div className={style.dropdown}>{generateOptions}</div>
      ) : null}
    </div>
  );
};

export default DropInput;

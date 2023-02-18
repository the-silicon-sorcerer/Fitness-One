"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { DropIcon } from "../../(svg)";

import style from "./dropInput.module.css";

interface DropInputProps {
  Icon: any;
  placeholder: string;
  options: string[];
}

const DropInput = ({ Icon, placeholder, options }: DropInputProps) => {
  const [menuOpen, setMenu] = useState(false);
  const [selected, setSelected] = useState<undefined | string>(undefined);

  const generateOptions = options.map((text) => {
    return (
      <div
        key={uuidv4()}
        style={{
          border: text === selected ? "2px solid var(--bg-600)" : undefined,
        }}
        className={style.option}
        onClick={() => setSelected(text)}
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

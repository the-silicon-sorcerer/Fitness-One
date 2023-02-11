"use client";

import style from "./buttonLarge.module.css";

interface ButtonLargeProps {
  text: string;
  onClick: () => void;
}

const ButtonLarge = ({ text, onClick }: ButtonLargeProps) => {
  return (
    <button onClick={() => onClick()} className={style.button}>
      <p className="body-B-Medium">{text}</p>
    </button>
  );
};

export default ButtonLarge;

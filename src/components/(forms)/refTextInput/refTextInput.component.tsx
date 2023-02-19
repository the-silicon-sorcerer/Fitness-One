import { Ref } from "react";
import style from "./refTextInput.module.css";

interface RefTextInputProps {
  Icon: any;
  placeholder: string;
  type: "text" | "number";
  ref: Ref<HTMLInputElement>;
}

const RefTextInput = ({ Icon, placeholder, type, ref }: RefTextInputProps) => {
  return (
    <div className={style.container}>
      <Icon />
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
};

export default RefTextInput;

import { forwardRef } from "react";
import type { Ref } from "react";

import style from "./refTextInput.module.css";

interface RefTextInputProps {
  Icon: any;
  placeholder: string;
  type: "text" | "number";
}

const RefTextInput = forwardRef(function RefInput(
  { Icon, placeholder, type }: RefTextInputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className={style.container}>
      <Icon />
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
});

export default RefTextInput;

"use client";

import ProgressHeader from "../../../(elements)/progressHeader/progressHeader.component";
import TextInput from "../../../(forms)/textInput/textInput.component";
import type { TextInputProps } from "../../../(forms)/textInput/textInput.component";
import DropInput from "../../../(forms)/dropInput/dropInput.component";
import type { DropInputProps } from "../../../(forms)/dropInput/dropInput.component";

import style from "./progressInfo.module.css";

interface InputsTypes {
  method: "drop" | "input";
  inputs: TextInputProps | DropInputProps;
}

interface ProgressInfoProps {
  heading: { header: string; subHeader: string };
  data: Array<InputsTypes>;
}

const ProgressInfo = ({ data, heading }: ProgressInfoProps) => {
  const constructedInputs = data.map((e) => {
    const isDrop = (
      inp: TextInputProps | DropInputProps
    ): inp is DropInputProps => {
      return e.method === "drop";
    };
    if (isDrop(e.inputs)) {
      return (
        <DropInput
          key={e.inputs.field}
          options={e.inputs.options}
          currState={e.inputs.currState}
          setState={e.inputs.setState}
          context={e.inputs.context}
          Icon={e.inputs.Icon}
          placeholder={e.inputs.placeholder}
          field={e.inputs.field}
        />
      );
    } else {
      return (
        <TextInput
          key={e.inputs.field}
          currState={e.inputs.currState}
          setState={e.inputs.setState}
          context={e.inputs.context}
          type={e.inputs.type}
          Icon={e.inputs.Icon}
          placeholder={e.inputs.placeholder}
          field={e.inputs.field}
        />
      );
    }
  });

  return (
    <div className={style.container}>
      <ProgressHeader heading={heading.header} subHeading={heading.subHeader} />
      {constructedInputs}
      <div className={style.buffer}></div>
    </div>
  );
};

export default ProgressInfo;

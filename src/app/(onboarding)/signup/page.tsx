"use client";

import { useRef } from "react";

import ButtonLarge from "../../../components/(buttons)/buttonLarge/buttonLarge.component";
import TextInput from "../../../components/(forms)/textInput/textInput.component";
import UserIcon from "../../../../public/icons/user.svg";

const SignUp = () => {
  const nameRef = useRef({} as HTMLInputElement);

  return (
    <div>
      <p>Create Account</p>
      <TextInput Icon={UserIcon} ref={nameRef} placeholder="Full name" />
      <ButtonLarge onClick={() => ""} text="Create Account" />
    </div>
  );
};

export default SignUp;

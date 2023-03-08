"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { captializeFirst } from "../../../utils/capitalizeFirst";

import style from "./signIn.module.css";

interface SignInProps {
  provider: string;
  Icon: any;
  callback: string;
}

const SignIn = ({ provider, Icon, callback }: SignInProps) => {
  const router = useRouter();

  const { status } = useSession();

  const logIn = () => {
    if (status === "authenticated") {
      void router.push("/");
    } else {
      void signIn(provider, { callbackUrl: callback });
    }
  };

  return (
    <button className={style.button} onClick={() => logIn()}>
      <div className={style.lable}>
        <Icon />
        <p className="body-B-Medium">{captializeFirst(provider)}</p>
      </div>
    </button>
  );
};

export default SignIn;

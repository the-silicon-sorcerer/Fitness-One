"use client";

import { useRouter } from "next/navigation";

import ButtonLarge from "../../components/(buttons)/buttonLarge/buttonLarge.component";
import Logo from "../../components/(elements)/logo/logo.component";
import HaveAccount from "../../components/(elements)/haveAccount/haveAccount.component";

import style from "./page.module.css";

const SplashScreen = () => {
  const router = useRouter();
  const createAccount = () => router.push("/signup");

  return (
    <div className={style.container}>
      <Logo color={"var(--bg-600)"} size={"36px"} />
      <div className={style.subContainer}>
        <ButtonLarge onClick={createAccount} text="Create Account" />
        <HaveAccount />
      </div>
    </div>
  );
};

export default SplashScreen;

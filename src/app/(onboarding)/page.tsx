"use client";

import ButtonLarge from "../../components/(buttons)/buttonLarge/buttonLarge.component";
import Logo from "../../components/logo/logo.component";
import style from "./page.module.css";
import { useRouter } from "next/navigation";

const SplashScreen = () => {
  const router = useRouter();
  const createAccount = () => router.push("/signup");

  return (
    <div className={style.container}>
      <Logo color={"var(--bg-600)"} size={"36px"} />
      <div className={style.subContainer}>
        <ButtonLarge onClick={createAccount} text="Create Account" />
        <p className="body-B-ExtraSmall">
          Already have an account? <span className="underline">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;

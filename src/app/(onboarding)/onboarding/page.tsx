"use client";

import { useContext } from "react";
import TextInput from "../../../components/(forms)/textInput/textInput.component";
import { UserIcon } from "../../../components/(svg)";
import { OnboaringContext } from "./layout";
import DropInput from "../../../components/(forms)/dropInput/dropInput.component";

import style from "./page.module.css";

const Onboarding = () => {
  const { progressData } = useContext(OnboaringContext);
  const heading = "Test";
  const subheading = "test2";

  if (progressData.currentPage === 1) {
    return (
      <div className={style.container}>
        <div className={style.heading}>
          <h4>{heading}</h4>
          <p>{subheading}</p>
        </div>
        <DropInput
          options={["Male", "Female", "Other"]}
          Icon={UserIcon}
          placeholder="Gender"
        />
        <TextInput Icon={UserIcon} placeholder="Gender" />
      </div>
    );
  }
};

export default Onboarding;

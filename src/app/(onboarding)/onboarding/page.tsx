"use client";

import { useContext, useRef, useEffect } from "react";

import { UserIcon } from "../../../components/(svg)";
import {
  OnboaringContext,
  gender,
  experience,
} from "../../../contexts/onboardingContext";
import InputVal from "../../../types/inputVal";
import DropInput from "../../../components/(forms)/dropInput/dropInput.component";
import TextInput from "../../../components/(forms)/textInput/textInput.component";
import ProgressHeader from "../../../components/(elements)/progressHeader/progressHeader.component";

import style from "./page.module.css";

const Onboarding = () => {
  const { progressData, progressDispatch } = useContext(OnboaringContext);
  const genderRef = useRef<gender>("" as gender);
  const ageRef = useRef({} as InputVal);
  const heightRef = useRef({} as InputVal);
  const weightRef = useRef({} as InputVal);
  const experienceRef = useRef<experience>({} as experience);

  useEffect(() => {
    if (progressData.currentPage === 2) {
      progressDispatch({
        type: "PAGE_ONE_INSERT",
        payload: {
          age: Number(ageRef.current.inputVal),
          weight: Number(weightRef.current.inputVal),
          height: Number(heightRef.current.inputVal),
          gender: genderRef.current,
          experience: experienceRef.current,
        },
      });
    }
    if (progressData.currentPage === 3) {
      progressDispatch({
        type: "PAGE_TWO_INSERT",
        payload: {
          age: 10,
          weight: 10,
          height: 10,
          gender: genderRef.current,
          experience: "BEGINNER",
        },
      });
    }
  }, [progressData.currentPage]);

  const heading = "Basic Information";
  const subheading =
    "This data is used to better generate workouts and track progress.";

  if (progressData.currentPage === 1) {
    return (
      <div className={style.container}>
        <ProgressHeader heading={heading} subHeading={subheading} />
        <DropInput
          options={["Male", "Female", "Other"]}
          Icon={UserIcon}
          placeholder="Gender"
          ref={genderRef}
        />
        <TextInput ref={ageRef} Icon={UserIcon} placeholder="Age" />
        <TextInput ref={heightRef} Icon={UserIcon} placeholder="Height" />
        <TextInput ref={weightRef} Icon={UserIcon} placeholder="Weight" />
        <DropInput
          options={["Beginner", "Intermediate", "Advanced"]}
          Icon={UserIcon}
          placeholder="Experience"
          ref={experienceRef}
        />
        <div className={style.buffer}></div>
      </div>
    );
  }

  if (progressData.currentPage === 2) {
  }
};

export default Onboarding;

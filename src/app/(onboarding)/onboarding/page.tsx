"use client";

import { useContext, useRef, useEffect, useState } from "react";

import { UserIcon } from "../../../components/(svg)";
import { OnboaringContext } from "../../../contexts/onboardingContext";
import DropInput from "../../../components/(forms)/dropInput/dropInput.component";
import TextInput from "../../../components/(forms)/textInput/textInput.component";
import ProgressHeader from "../../../components/(elements)/progressHeader/progressHeader.component";

import style from "./page.module.css";

const Onboarding = () => {
  const { progressData, progressDispatch } = useContext(OnboaringContext);
  const [payload, setPayload] = useState(progressData);

  useEffect(() => {
    progressDispatch({ type: "SET_DATA", payload: payload });
  }, [payload]);

  console.log(progressData);

  const heading = "Basic Information";
  const subheading =
    "This data is used to better generate workouts and track progress.";

  if (progressData.currentPage === 1) {
    return (
      <div className={style.container}>
        <ProgressHeader heading={heading} subHeading={subheading} />
        <DropInput
          setState={setPayload}
          currState={payload}
          context={OnboaringContext}
          options={["Male", "Female", "Other"]}
          Icon={UserIcon}
          placeholder="Gender"
          field="gender"
        />
        <TextInput
          currState={payload}
          setState={setPayload}
          context={OnboaringContext}
          type="number"
          Icon={UserIcon}
          placeholder="Age"
          field="age"
        />
        <TextInput
          currState={payload}
          setState={setPayload}
          context={OnboaringContext}
          type="number"
          Icon={UserIcon}
          placeholder="Height (in)"
          field="height"
        />
        <TextInput
          currState={payload}
          setState={setPayload}
          context={OnboaringContext}
          type="number"
          Icon={UserIcon}
          placeholder="Weight (lbs)"
          field="weight"
        />
        <DropInput
          setState={setPayload}
          currState={payload}
          context={OnboaringContext}
          options={["Beginner", "Intermediate", "Advanced"]}
          Icon={UserIcon}
          placeholder="Experience"
          field="experience"
        />
        <div className={style.buffer}></div>
      </div>
    );
  }

  if (progressData.currentPage === 2) {
  }
};

export default Onboarding;

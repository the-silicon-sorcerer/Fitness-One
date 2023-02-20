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

  console.log(progressData);

  useEffect(() => {
    progressDispatch({ type: "SET_DATA", payload: payload });
  }, [payload]);

  const heading = "Basic Information";
  const subheading =
    "This data is used to better generate workouts and track progress.";

  const heading2 = "Set Fitness Goals";
  const subheading2 = "These can be changed at any time.";

  const heading3 = "Account Setup Complete!";
  const subheading3 = "Click finish to enter your dashboard.";

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
    return (
      <div className={style.container}>
        <ProgressHeader heading={heading2} subHeading={subheading2} />
        <TextInput
          currState={payload}
          setState={setPayload}
          context={OnboaringContext}
          type="number"
          Icon={UserIcon}
          placeholder="Target Weight"
          field="weightGoal"
        />
        <DropInput
          setState={setPayload}
          currState={payload}
          context={OnboaringContext}
          options={["Strength", "Size"]}
          Icon={UserIcon}
          placeholder="Fitness Goal"
          field="fitnessGoal"
        />
        <DropInput
          setState={setPayload}
          currState={payload}
          context={OnboaringContext}
          options={["Cutting", "Bulking", "Maintain"]}
          Icon={UserIcon}
          placeholder="Nutrition Goal"
          field="nutritionGoal"
        />

        <div className={style.buffer}></div>
      </div>
    );
  }

  if (progressData.currentPage === 3) {
    return (
      <div className={style.finalContainer}>
        <ProgressHeader heading={heading3} subHeading={subheading3} />
      </div>
    );
  }
};

export default Onboarding;

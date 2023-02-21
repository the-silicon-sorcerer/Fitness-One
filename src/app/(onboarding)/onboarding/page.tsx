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
  const subheading2 = "You can change your goals at any time";

  const heading3 = "Account Setup Complete!";
  const subheading3 = "Click finish to enter your dashboard.";

  if (progressData.currentPage === 1) {
    return (
      <div className={style.container}>
        <ProgressHeader heading={heading} subHeading={subheading} />
        <TextInput
          currState={payload}
          setState={setPayload}
          context={OnboaringContext}
          type="text"
          Icon={UserIcon}
          placeholder="First name"
          field="firstName"
        />
        <TextInput
          currState={payload}
          setState={setPayload}
          context={OnboaringContext}
          type="text"
          Icon={UserIcon}
          placeholder="Last name"
          field="lastName"
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

        <div className={style.buffer}></div>
      </div>
    );
  }

  if (progressData.currentPage === 2) {
    return (
      <div className={style.container}>
        <ProgressHeader heading={heading2} subHeading={subheading2} />
        <DropInput
          setState={setPayload}
          currState={payload}
          context={OnboaringContext}
          options={["Beginner", "Intermediate", "Advanced"]}
          Icon={UserIcon}
          placeholder="Experience"
          field="experience"
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
        <TextInput
          currState={payload}
          setState={setPayload}
          context={OnboaringContext}
          type="number"
          Icon={UserIcon}
          placeholder="Target Weight (lbs)"
          field="weightGoal"
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

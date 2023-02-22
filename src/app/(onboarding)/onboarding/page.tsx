"use client";

import { useContext, useEffect, useState } from "react";

import { UserIcon } from "../../../components/(svg)";
import { OnboaringContext } from "../../../contexts/onboardingContext";
import ProgressInfo from "../../../components/(pages)/progressPage/progressInfo/progressInfo.component";
import FinalMessage from "../../../components/(pages)/progressPage/finalMessage/finalMessage.component";

const Onboarding = () => {
  const { progressData, progressDispatch } = useContext(OnboaringContext);
  const [payload, setPayload] = useState(progressData);

  useEffect(() => {
    progressDispatch({ type: "SET_DATA", payload: payload });
  }, [payload]);

  if (progressData.currentPage === 1) {
    return (
      <ProgressInfo
        data={[
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              type: "text",
              Icon: UserIcon,
              placeholder: "First name",
              field: "firstName",
            },
          },
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              type: "text",
              Icon: UserIcon,
              placeholder: "Last name",
              field: "lastName",
            },
          },
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              type: "number",
              Icon: UserIcon,
              placeholder: "Age",
              field: "age",
            },
          },
          {
            method: "drop",
            inputs: {
              options: ["Male", "Female", "Other"],
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              Icon: UserIcon,
              placeholder: "Gender",
              field: "gender",
            },
          },
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              type: "number",
              Icon: UserIcon,
              placeholder: "Height (in)",
              field: "height",
            },
          },
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              type: "number",
              Icon: UserIcon,
              placeholder: "Weight (lbs)",
              field: "weight",
            },
          },
        ]}
        heading={{
          header: "Basic Information",
          subHeader:
            "This data is used to better generate workouts and track progress.",
        }}
      />
    );
  }

  if (progressData.currentPage === 2) {
    return (
      <ProgressInfo
        data={[
          {
            method: "drop",
            inputs: {
              options: ["Beginner", "Intermediate", "Advanced"],
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              Icon: UserIcon,
              placeholder: "Experience",
              field: "experience",
            },
          },
          {
            method: "drop",
            inputs: {
              options: ["Strength", "Size"],
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              Icon: UserIcon,
              placeholder: "Fitness goal",
              field: "fitnessGoal",
            },
          },
          {
            method: "drop",
            inputs: {
              options: ["Cutting", "Bulking", "Maintain"],
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              Icon: UserIcon,
              placeholder: "Nutrition goal",
              field: "nutritionGoal",
            },
          },
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: OnboaringContext,
              type: "number",
              Icon: UserIcon,
              placeholder: "Target weight (lbs)",
              field: "weightGoal",
            },
          },
        ]}
        heading={{
          header: "Set Fitness Goals",
          subHeader: "You can change your goals at any time.",
        }}
      />
    );
  }

  if (progressData.currentPage === 3) {
    return (
      <FinalMessage
        heading="Account Setup Complete!"
        subheading="Click finish to enter your dashboard."
      />
    );
  }
};

export default Onboarding;

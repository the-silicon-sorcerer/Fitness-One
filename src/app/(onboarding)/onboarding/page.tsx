"use client";

import { useContext, useEffect, useState } from "react";

import { OnboaringContext } from "../../../contexts/onboarding/onboardingContext";
import ProgressInfo from "../../../components/(pages)/progressPage/progressInfo/progressInfo.component";
import FinalMessage from "../../../components/(pages)/progressPage/finalMessage/finalMessage.component";

import { UserIcon } from "../../../components/(svg)";
import { DateIcon } from "../../../components/(svg)";
import { HeightIcon } from "../../../components/(svg)";
import { GenderIcon } from "../../../components/(svg)";
import { WeightIcon } from "../../../components/(svg)";
import { StarIcon } from "../../../components/(svg)";
import { DumbellIcon } from "../../../components/(svg)";
import { NutritionIcon } from "../../../components/(svg)";

const Onboarding = () => {
  const { formState, formDispatch } = useContext(OnboaringContext);
  const [payload, setPayload] = useState(formState);

  useEffect(() => {
    formDispatch({ type: "SET_DATA", payload: payload });
  }, [payload]);

  if (formState.currentPage === 1) {
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
              Icon: DateIcon,
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
              Icon: GenderIcon,
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
              Icon: HeightIcon,
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
              Icon: WeightIcon,
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

  if (formState.currentPage === 2) {
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
              Icon: StarIcon,
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
              Icon: DumbellIcon,
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
              Icon: NutritionIcon,
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
              Icon: WeightIcon,
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

  if (formState.currentPage === 3) {
    return (
      <FinalMessage
        heading="Account Setup Complete!"
        subheading="Click finish to enter your dashboard."
      />
    );
  }
};

export default Onboarding;

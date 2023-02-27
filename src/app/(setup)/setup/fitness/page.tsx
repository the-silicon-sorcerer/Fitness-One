"use client";

import ProgressInfo from "../../../../components/(pages)/progressPage/progressInfo/progressInfo.component";
import { useContext, useState, useEffect } from "react";
import { FitnessSetupContext } from "../../../../contexts/fitnessSetupContext/fitnessContext";
import FinalMessage from "../../../../components/(pages)/progressPage/finalMessage/finalMessage.component";

import { UserIcon } from "../../../../components/(svg)";

const FitnessPage = () => {
  const { progressData, progressDispatch } = useContext(FitnessSetupContext);
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
              context: FitnessSetupContext,
              type: "number",
              Icon: UserIcon,
              placeholder: "Days per week",
              field: "DPW",
            },
          },
          {
            method: "drop",
            inputs: {
              options: ["PPL", "Arnold", '" Bro split "', "Custom"],
              currState: payload,
              setState: setPayload,
              context: FitnessSetupContext,
              Icon: UserIcon,
              placeholder: "Workout split",
              field: "split",
              value: [{ text: '" Bro split "', value: "BRO_SPLIT" }],
            },
          },
        ]}
        heading={{
          header: "Split Information",
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
              context: FitnessSetupContext,
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
              context: FitnessSetupContext,
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
              context: FitnessSetupContext,
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
              context: FitnessSetupContext,
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

export default FitnessPage;

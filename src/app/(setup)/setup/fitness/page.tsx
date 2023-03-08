"use client";

import { useContext, useState, useEffect } from "react";

import { FitnessSetupContext } from "../../../../contexts/fitnessSetupContext/fitnessContext";
import ProgressInfo from "../../../../components/(pages)/progressPage/progressInfo/progressInfo.component";
import FinalMessage from "../../../../components/(pages)/progressPage/finalMessage/finalMessage.component";

import { StarIcon, DateIcon } from "../../../../components/(svg)";

const FitnessPage = () => {
  const { formState, formDispatch } = useContext(FitnessSetupContext);
  const [payload, setPayload] = useState(formState);

  useEffect(() => {
    formDispatch({ type: "SET_DATA", payload: payload });
  }, [payload]);

  if (formState.currentPage === 1) {
    const options =
      payload.split === "PPL"
        ? ["Push", "Pull", "Legs", "Rest"]
        : payload.split === "ARNOLD"
        ? ["Chest / Back", "Arms", "Legs", "Rest"]
        : ["Chest", "Back", "Biceps", "Triceps", "Shoulders", "Legs", "Rest"];

    const valueOverride = [
      { text: "Chest / Back", value: "CHEST_BACK" },
      {
        text: "Arms",
        value: "BICEPS_TRICEPS_SHOULDERS",
      },
      {
        text: "Push",
        value: "CHEST_TRICEPS_SHOULDERS",
      },
      {
        text: "Pull",
        value: "BICEPS_BACK",
      },
    ];

    return (
      <ProgressInfo
        data={[
          {
            method: "drop",
            inputs: {
              options: ["PPL", "Arnold", '" Bro split "', "Custom"],
              currState: payload,
              setState: setPayload,
              context: FitnessSetupContext,
              Icon: StarIcon,
              placeholder: "Workout split",
              field: "split",
              value: [{ text: '" Bro split "', value: "BRO_SPLIT" }],
            },
          },
          {
            method: "drop",
            inputs: {
              options: options,
              currState: payload,
              setState: setPayload,
              context: FitnessSetupContext,
              Icon: DateIcon,
              placeholder: "Monday",
              field: "monday",
              value: valueOverride,
            },
          },
          {
            method: "drop",
            inputs: {
              options: options,
              currState: payload,
              setState: setPayload,
              context: FitnessSetupContext,
              Icon: DateIcon,
              placeholder: "Tuesday",
              field: "tuesday",
              value: valueOverride,
            },
          },
          {
            method: "drop",
            inputs: {
              options: options,
              currState: payload,
              setState: setPayload,
              context: FitnessSetupContext,
              Icon: DateIcon,
              placeholder: "Wednesday",
              field: "wednesday",
              value: valueOverride,
            },
          },
          {
            method: "drop",
            inputs: {
              options: options,
              currState: payload,
              setState: setPayload,
              context: FitnessSetupContext,
              Icon: DateIcon,
              placeholder: "Thursday",
              field: "thursday",
              value: valueOverride,
            },
          },
          {
            method: "drop",
            inputs: {
              options: options,
              currState: payload,
              setState: setPayload,
              context: FitnessSetupContext,
              Icon: DateIcon,
              placeholder: "Friday",
              field: "friday",
              value: valueOverride,
            },
          },
          {
            method: "drop",
            inputs: {
              options: options,
              currState: payload,
              setState: setPayload,
              context: FitnessSetupContext,
              Icon: DateIcon,
              placeholder: "Saturday",
              field: "saturday",
              value: valueOverride,
            },
          },
          {
            method: "drop",
            inputs: {
              options: options,
              currState: payload,
              setState: setPayload,
              context: FitnessSetupContext,
              Icon: DateIcon,
              placeholder: "Sunday",
              field: "sunday",
              value: valueOverride,
            },
          },
        ]}
        heading={{
          header: "Create Schedule",
          subHeader: "You can change your schedule at any time.",
        }}
      />
    );
  }

  if (formState.currentPage === 2) {
    return (
      <FinalMessage
        heading="Fitness Setup Complete!"
        subheading="Click finish to save your fitness plan."
      />
    );
  }
};

export default FitnessPage;

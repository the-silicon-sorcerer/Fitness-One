"use client";

import ProgressInfo from "../../../../components/(pages)/progressPage/progressInfo/progressInfo.component";
import { useContext, useState, useEffect } from "react";
import FinalMessage from "../../../../components/(pages)/progressPage/finalMessage/finalMessage.component";

import { StarIcon, FoodIcon, WaterIcon } from "../../../../components/(svg)";
import { NutritionSetupContext } from "../../../../contexts/nutritionSetupContext/nutritionSetupContext";

const NutritionPage = () => {
  const { progressData, progressDispatch } = useContext(NutritionSetupContext);
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
              context: NutritionSetupContext,
              type: "text",
              Icon: FoodIcon,
              placeholder: "Total calories",
              field: "calories",
            },
          },
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: NutritionSetupContext,
              type: "text",
              Icon: StarIcon,
              placeholder: "Protein (grams)",
              field: "protein",
            },
          },
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: NutritionSetupContext,
              type: "text",
              Icon: StarIcon,
              placeholder: "Fats (grams)",
              field: "fat",
            },
          },
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: NutritionSetupContext,
              type: "text",
              Icon: StarIcon,
              placeholder: "Carbs (grams)",
              field: "carbs",
            },
          },
          {
            method: "input",
            inputs: {
              currState: payload,
              setState: setPayload,
              context: NutritionSetupContext,
              type: "text",
              Icon: WaterIcon,
              placeholder: "Water intake (oz)",
              field: "water",
            },
          },
        ]}
        heading={{
          header: "Diet Information",
          subHeader: "Enter your daily diet macro breakdown.",
        }}
      />
    );
  }

  if (progressData.currentPage === 2) {
    return (
      <FinalMessage
        heading="Diet Setup Complete!"
        subheading="Click finish to save your diet plan."
      />
    );
  }
};

export default NutritionPage;

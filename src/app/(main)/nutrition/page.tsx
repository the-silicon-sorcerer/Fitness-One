"use client";

import { useContext, useEffect, useState } from "react";
import { trpc } from "../../../utils/trpcProvider";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import Buffer from "../../../components/(elements)/buffer/buffer.component";
import LoadingSpinner from "../../../components/(elements)/loadingSpinner/loadingSpinner.component";
import CalendarHeader from "../../../components/(pages)/main/calendarHeader/calendarHeader.component";
import PrecentComplete from "../../../components/(pages)/main/precentComplete/precentComplete.component";
import MacroDisplay from "../../../components/(pages)/main/nutrition/macroDisplay/macroDisplay.component";
import { MainContext } from "../../../contexts/main/mainContext";
import { captializeFirst } from "../../../utils/capitalizeFirst";

import style from "./page.module.css";
import ButtonLarge from "../../../components/(buttons)/buttonLarge/buttonLarge.component";
import Link from "next/link";

const NutritionPage = () => {
  if (typeof window !== "undefined") window.scrollTo(0, 0);
  const { mainDispatch, mainState } = useContext(MainContext);
  const [date, setDate] = useState(moment());
  const macros = trpc.nutritionRouter.getMeals.useQuery({
    date: date.format("YYYY-MM-DD"),
  });
  const router = useRouter();

  useEffect(() => {
    mainDispatch({ type: "SET_PAGE", payload: { page: "NUTRITION" } });
    if (!mainState.nutritionPlan && !mainState.isLoading) {
      router.push("/setup/nutrition");
    }
  }, []);

  const totalCalories = () => {
    if (macros.data) {
      let totCal = 0;
      for (const meal of macros.data) {
        totCal += meal.food.calories * meal.servings;
      }
      return totCal;
    }
    return 0;
  };

  const getMacros = () => {
    let totP = 0;
    let totC = 0;
    let totF = 0;
    if (macros.data) {
      for (const meal of macros.data) {
        totP += meal.food.protein * meal.servings;
        totC += meal.food.carbs * meal.servings;
        totF += meal.food.fat * meal.servings;
      }
    }
    return {
      protein: Math.round(totP),
      carbs: Math.round(totC),
      fat: Math.round(totF),
    };
  };

  type Macros = "protein" | "fat" | "carbs";

  const generateMacros = (...args: Macros[]) => {
    const arr = [];
    for (const macro of args) {
      arr.push(
        <MacroDisplay
          key={uuidv4()}
          title={captializeFirst(macro)}
          macro={getMacros()?.[macro]}
          goal={mainState.nutritionPlan?.[macro]}
        />
      );
    }
    return arr;
  };

  if (mainState.isLoading || !mainState.nutritionPlan) {
    return <LoadingSpinner />;
  }

  return (
    <div className={style.container}>
      <CalendarHeader date={date} setDate={setDate} />
      {macros.isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Buffer height="119.3px" />
          <PrecentComplete
            bg="var(--bg-800)"
            title={
              date.format("YYYY-MM-DD") == moment().format("YYYY-MM-DD")
                ? "Todays Calorie Intake"
                : `${date.format("dddd MMMM Do")}`
            }
            override={`${totalCalories()} / ${
              mainState.nutritionPlan.calories
            } Cal`}
            total={mainState.nutritionPlan.calories!}
            input={totalCalories()}
          />
          <div className={style.macroContainer}>
            {generateMacros("protein", "carbs", "fat", "protein")}
          </div>
          <Link href="/meal/add">
            <ButtonLarge text="+ Add Meals" />
          </Link>
        </>
      )}
    </div>
  );
};

export default NutritionPage;

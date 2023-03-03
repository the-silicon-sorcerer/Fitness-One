"use client";

import { useContext, useEffect, useState } from "react";
import { trpc } from "../../../utils/trpcProvider";
import { useRouter } from "next/navigation";
import moment from "moment";

import { MainContext } from "../../../contexts/main/mainContext";
import Buffer from "../../../components/(elements)/buffer/buffer.component";
import LoadingSpinner from "../../../components/(elements)/loadingSpinner/loadingSpinner.component";
import CalendarHeader from "../../../components/(pages)/main/calendarHeader/calendarHeader.component";
import PrecentComplete from "../../../components/(pages)/main/precentComplete/precentComplete.component";

import style from "./page.module.css";

const NutritionPage = () => {
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

  if (mainState.isLoading || !mainState.nutritionPlan) {
    return <LoadingSpinner />;
  }

  return (
    <div className={style.container}>
      <CalendarHeader date={date} setDate={setDate} />
      <Buffer height="119.3px" />
      <PrecentComplete
        bg="var(--bg-800)"
        title="Today's Calorie Inake"
        override={`780 / ${mainState.nutritionPlan.calories} Cal`}
        total={mainState.nutritionPlan.calories!}
        input={780}
      />
    </div>
  );
};

export default NutritionPage;

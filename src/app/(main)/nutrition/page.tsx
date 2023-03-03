"use client";

import { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/main/mainContext";
import LoadingSpinner from "../../../components/(elements)/loadingSpinner/loadingSpinner.component";
import { useRouter } from "next/navigation";

import style from "./page.module.css";
import CalendarHeader from "../../../components/(pages)/main/calendarHeader/calendarHeader.component";

const NutritionPage = () => {
  const { mainDispatch, mainState } = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    mainDispatch({ type: "SET_PAGE", payload: { page: "NUTRITION" } });

    if (!mainState.nutritionPlan && !mainState.isLoading)
      router.push("/setup/nutrition");
  }, []);

  if (mainState.isLoading || !mainState.nutritionPlan) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <CalendarHeader />
    </div>
  );
};

export default NutritionPage;

"use client";

import { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/main/mainContext";

import style from "./page.module.css";

const NutritionPage = () => {
  const { mainDispatch } = useContext(MainContext);

  useEffect(() => {
    mainDispatch({ type: "SET_PAGE", payload: { page: "NUTRITION" } });
  }, []);

  return <div>Nutrition</div>;
};

export default NutritionPage;

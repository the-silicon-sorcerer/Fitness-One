"use client";

import { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/main/mainContext";

import style from "./page.module.css";

const FitnessPage = () => {
  const { mainDispatch } = useContext(MainContext);

  useEffect(() => {
    mainDispatch({ type: "SET_PAGE", payload: { page: "FITNESS" } });
  }, []);

  return <div>Fitness</div>;
};

export default FitnessPage;

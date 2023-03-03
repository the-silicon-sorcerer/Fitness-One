"use client";

import { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/main/mainContext";
import { useRouter } from "next/navigation";

import LoadingSpinner from "../../../components/(elements)/loadingSpinner/loadingSpinner.component";
import CalendarHeader from "../../../components/(pages)/main/calendarHeader/calendarHeader.component";
import PrecentComplete from "../../../components/(pages)/main/precentComplete/precentComplete.component";
import Buffer from "../../../components/(elements)/buffer/buffer.component";

import style from "./page.module.css";

const FitnessPage = () => {
  const { mainDispatch, mainState } = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    mainDispatch({ type: "SET_PAGE", payload: { page: "FITNESS" } });

    if (!mainState.fitnessPLan && !mainState.isLoading)
      router.push("/setup/fitness");
  }, []);

  if (mainState.isLoading || !mainState.fitnessPLan) {
    return <LoadingSpinner />;
  }

  return <div className={style.container}></div>;
};

export default FitnessPage;

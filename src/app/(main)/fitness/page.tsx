"use client";

import { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/main/mainContext";
import { useRouter } from "next/navigation";

import style from "./page.module.css";
import LoadingSpinner from "../../../components/(elements)/loadingSpinner/loadingSpinner.component";
import CalendarHeader from "../../../components/(pages)/main/calendarHeader/calendarHeader.component";

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

  return (
    <div>
      <CalendarHeader />
    </div>
  );
};

export default FitnessPage;

"use client";

import { useContext, useEffect } from "react";

import { MainContext } from "../../contexts/main/mainContext";
import Header from "../../components/(pages)/main/dashboard/header/header.component";
import Buffer from "../../components/(elements)/buffer/buffer.component";
import UserInfo from "../../components/(pages)/main/dashboard/userInfo/userInfo.component";

import style from "./page.module.css";
import ContainingBlock from "../../components/(elements)/containingBlock/containingBlock.component";
import PrecentComplete from "../../components/(pages)/main/precentComplete/precentComplete.component";
import IconBox from "../../components/(pages)/main/IconBox/iconBox.component";
import {
  NextIconSmall,
  NutritionIconSmall,
  dumbBellIconSmall,
} from "../../components/(svg)";
import LoadingSpinner from "../../components/(elements)/loadingSpinner/loadingSpinner.component";

const Dashboard = () => {
  const { mainDispatch, mainState } = useContext(MainContext);

  useEffect(() => {
    mainDispatch({ type: "SET_PAGE", payload: { page: "DASHBOARD" } });
  }, []);

  const setupSteps = 3;

  const calcPrecentage = () => {
    if (!mainState.isLoading) {
      let tot = 1;
      if (mainState.fitnessPLan) tot++;
      if (mainState.nutritionPlan) tot++;
      return tot;
    }
    return 1;
  };

  if (mainState.isLoading) {
    return (
      <div className={style.container}>
        <Header />
        <LoadingSpinner />
      </div>
    );
  }

  if (calcPrecentage() < setupSteps) {
    return (
      <div className={style.container}>
        <Header />
        <Buffer height="55px" />
        <UserInfo />

        <ContainingBlock>
          <PrecentComplete
            input={calcPrecentage()}
            total={3}
            bg="var(--bg-700)"
            title="Account Setup"
          />
          {!mainState.fitnessPLan && (
            <IconBox
              text="Setup workout split"
              Icon={dumbBellIconSmall}
              End={NextIconSmall}
              link="/setup/fitness"
            />
          )}
          {!mainState.nutritionPlan && (
            <IconBox
              text="Setup nutrition plan"
              Icon={NutritionIconSmall}
              End={NextIconSmall}
              link="/setup/nutrition"
            />
          )}
        </ContainingBlock>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <Header />
      <Buffer height="55px" />
      <UserInfo />
    </div>
  );
};

export default Dashboard;

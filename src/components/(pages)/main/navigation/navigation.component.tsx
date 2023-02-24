"use client";

import Link from "next/link";
import { useContext } from "react";

import { MainContext } from "../../../../contexts/main/mainContext";

import style from "./navigation.module.css";
import {
  DumbellIconLarge,
  HomeIconLarge,
  NutritionIcon,
  NutritionIconLarge,
  UserIconLarge,
} from "../../../(svg)";

const Navigation = () => {
  const { mainState } = useContext(MainContext);

  return (
    <div className={style.container}>
      <Link href="/">
        <HomeIconLarge
          style={{
            fill:
              mainState.currentPage === "DASHBOARD"
                ? "var(--bg-600)"
                : "var(--bg-700)",
          }}
        />
      </Link>
      <Link href="/fitness">
        <DumbellIconLarge
          style={{
            fill:
              mainState.currentPage === "FITNESS"
                ? "var(--bg-600)"
                : "var(--bg-700)",
          }}
        />
      </Link>
      <Link href="/nutrition">
        <NutritionIconLarge
          style={{
            fill:
              mainState.currentPage === "NUTRITION"
                ? "var(--bg-600)"
                : "var(--bg-700)",
          }}
        />
      </Link>
      <Link href="/profile">
        <UserIconLarge
          style={{
            fill:
              mainState.currentPage === "PROFILE"
                ? "var(--bg-600)"
                : "var(--bg-700)",
          }}
        />
      </Link>
    </div>
  );
};

export default Navigation;

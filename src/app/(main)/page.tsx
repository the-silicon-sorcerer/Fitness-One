"use client";

import { useContext, useEffect } from "react";

import { MainContext } from "../../contexts/main/mainContext";
import Header from "../../components/(pages)/dashboard/header/header.component";
import Buffer from "../../components/(elements)/buffer/buffer.component";
import UserInfo from "../../components/(pages)/dashboard/userInfo/userInfo.component";

import style from "./page.module.css";

const Dashboard = () => {
  const { mainDispatch } = useContext(MainContext);

  useEffect(() => {
    mainDispatch({ type: "SET_PAGE", payload: { page: "DASHBOARD" } });
  }, []);

  return (
    <div className={style.container}>
      <Header />
      <Buffer height="55px" />
      <UserInfo />
    </div>
  );
};

export default Dashboard;

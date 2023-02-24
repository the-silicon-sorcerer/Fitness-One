"use client";

import { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/main/mainContext";

import style from "./page.module.css";

const ProfilePage = () => {
  const { mainDispatch } = useContext(MainContext);

  useEffect(() => {
    mainDispatch({ type: "SET_PAGE", payload: { page: "PROFILE" } });
  }, []);

  return <div>Profile</div>;
};

export default ProfilePage;

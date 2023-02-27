"use client";

import Image from "next/image";

import getDate from "../../../../../utils/getDate";
import BoxIcon from "../../../../(elements)/boxIcon/boxIcon.component";
import { BellIconsmall } from "../../../../(svg)";
import { useSession } from "next-auth/react";

import style from "./userInfo.module.css";

const UserInfo = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    const image = session?.user?.image;
    const name = session?.user?.name;
    const date = getDate();

    return (
      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image fill sizes="30px" src={image ? image : ""} alt="" />
        </div>

        <div className={style.text}>
          <p className="body-B-Small">{name ? name : ""}</p>
          <p className="body-ExtraSmall">{`${date.day} ${date.month} ${date.date}th`}</p>
        </div>
        <div className={style.notifactions}>
          <BoxIcon size="30px" Icon={BellIconsmall} bg />
        </div>
      </div>
    );
  }

  return (
    <div className={`${style.skeleton} skeleton`}>
      <div className={`${style.skeletonMain} skeleton`}>
        <div className={`${style.skeletonPic} skeleton`}></div>
        <div className={`${style.skeletonText} skeleton`}></div>
      </div>
      <div className={`${style.skeletonIcon} skeleton`}></div>
    </div>
  );
};

export default UserInfo;

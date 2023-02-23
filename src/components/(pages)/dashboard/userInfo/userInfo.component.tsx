import Image from "next/image";

import getServerSession from "../../../../utils/getServerSession";

import style from "./userInfo.module.css";
import getDate from "../../../../utils/getDate";
import BoxIcon from "../../../(elements)/boxIcon/boxIcon.component";
import { BellIconsmall } from "../../../(svg)";

interface UserInfoProps {
  skeleton?: boolean;
}

const UserInfo = async ({ skeleton }: UserInfoProps) => {
  if (!skeleton) {
    const session = await getServerSession();
    const image = session?.user?.image;
    const name = session?.user?.name;
    const date = getDate();

    return (
      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image fill src={image ? image : ""} alt="" />
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
  return <div className={style.skeleton}></div>;
};

export default UserInfo;

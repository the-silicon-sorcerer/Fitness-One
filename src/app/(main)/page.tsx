import Header from "../../components/(pages)/dashboard/header/header.component";
import Buffer from "../../components/(elements)/buffer/buffer.component";

import style from "./page.module.css";
import UserInfo from "../../components/(pages)/dashboard/userInfo/userInfo.component";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <div className={style.container}>
      <Header />
      <Buffer height="55px" />
      {/* @ts-expect-error sever component */}
      <Suspense fallback={<UserInfo skeleton />}>
        {/* @ts-expect-error sever component */}
        <UserInfo />
      </Suspense>
    </div>
  );
};

export default Dashboard;

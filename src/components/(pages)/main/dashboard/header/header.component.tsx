import { signOut } from "next-auth/react";

import Logo from "../../../../(elements)/logo/logo.component";

import { UserIcon } from "../../../../(svg)";
import { SettingsIcon } from "../../../../(svg)";

import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.container} onClick={() => signOut()}>
      <div className={style.header}>
        <UserIcon />
        <Logo color="var(--bg-600)" size="20px" />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Header;

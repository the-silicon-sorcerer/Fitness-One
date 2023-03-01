"use cliet";

import { SettingsIcon } from "../../../(svg)";
import style from "./precentComplete.module.css";

interface PrecentCompleteProps {
  bg: string;
  title: string;
  input: number;
  total: number;
  skeleton?: boolean;
}

const PrecentComplete = ({
  title,
  bg,
  input,
  total,
  skeleton,
}: PrecentCompleteProps) => {
  const precent = Math.floor((input / total) * 100);

  if (skeleton) {
    return <div className={`${style.skelContainer} skeleton`}></div>;
  }

  return (
    <div className={style.container} style={{ background: bg }}>
      <div className={style.text}>
        <p className="body-B-Small">{title}</p>
        <h5>{`${precent}% Complete`}</h5>
      </div>
      <div className={style.bar}>
        <div className={style.progress} style={{ width: `${precent}%` }}></div>
      </div>
      <div className={style.icon}>
        <SettingsIcon />
      </div>
    </div>
  );
};

export default PrecentComplete;

"use cliet";

import { SettingsIcon } from "../../../(svg)";

import style from "./precentComplete.module.css";

interface PrecentCompleteProps {
  bg: string;
  title: string;
  input: number;
  total: number;
  skeleton?: boolean;
  override?: string;
}

const PrecentComplete = ({
  title,
  bg,
  input,
  total,
  skeleton,
  override,
}: PrecentCompleteProps) => {
  const precent = Math.floor((input / total) * 100);

  if (skeleton) {
    return <div className={`${style.skelContainer} skeleton`}></div>;
  }

  return (
    <div className={style.container} style={{ background: bg }}>
      <div className={style.text}>
        <p className="body-B-Small">{title}</p>
        <h5>{override ? override : `${precent}% Complete`}</h5>
      </div>
      <div
        className={style.bar}
        style={{
          backgroundColor: bg === "var(--bg-800)" ? "var(--bg-700)" : undefined,
        }}
      >
        <div className={style.progress} style={{ width: `${precent}%` }}></div>
      </div>
      <div className={style.icon}>
        <SettingsIcon />
      </div>
    </div>
  );
};

export default PrecentComplete;

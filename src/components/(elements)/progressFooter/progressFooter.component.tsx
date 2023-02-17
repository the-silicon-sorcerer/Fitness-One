import { BackIconSmall } from "../../(svg)";
import { NextIconSmall } from "../../(svg)";

import style from "./progressFooter.module.css";

const ProgressFooter = () => {
  return (
    <div className={style.footer}>
      <div className={style.previous}>
        <BackIconSmall style={{ fill: "var(--bg-600)" }} />
        <p className="body-B-Small">Previous</p>
      </div>
      <div className={style.next}>
        <p className="body-B-Medium">Continue</p>
        <NextIconSmall style={{ fill: "var(--bg-800)" }} />
      </div>
    </div>
  );
};

export default ProgressFooter;

import style from "./macroDisplay.module.css";

interface MacroDisplayProps {
  title: string;
  macro: number;
  goal?: number;
}

const MacroDisplay = ({ title, macro, goal }: MacroDisplayProps) => {
  let precent = 0;
  if (goal) precent = Math.round((macro / goal) * 100);
  return (
    <div className={style.container}>
      <div
        className={style.circle}
        style={{
          backgroundImage: `conic-gradient(var(--bg-600) ${precent}%, var(--bg-700) ${precent}%)`,
        }}
      >
        <div className={style.inner}>
          <p className="body-B-Small">
            {String(precent)}
            <span className="body-ExtraSmall">%</span>
          </p>
        </div>
      </div>
      <div className={style.text}>
        <p className="body-Small">{title}</p>
        <p className="body-B-Medium">
          {macro}
          <span className="body-B-ExtraSmall">g</span>
        </p>
      </div>
    </div>
  );
};

export default MacroDisplay;

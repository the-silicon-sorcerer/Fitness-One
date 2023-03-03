import style from "./dateBox.module.css";

interface DateBoxProps {
  day: string;
  date: string;
  fill?: string;
}

const DateBox = ({ day, date, fill }: DateBoxProps) => {
  return (
    <div
      className={style.dateBox}
      style={{ backgroundColor: fill ? fill : undefined }}
    >
      <p
        className="body-B-Small"
        style={{
          color: fill ? "var(--bg-700)" : undefined,
          fontWeight: fill ? 800 : undefined,
        }}
      >
        {date}
      </p>
      <p
        className="body-B-ExtraSmall"
        style={{
          color: fill ? "var(--bg-700)" : undefined,
          fontWeight: fill ? 800 : undefined,
        }}
      >
        {day}
      </p>
    </div>
  );
};

export default DateBox;

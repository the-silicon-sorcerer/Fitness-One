import style from "./boxIcon.module.css";

interface BoxIconProps {
  Icon: any;
  size: string;
  bg?: boolean;
}

const BoxIcon = ({ Icon, bg, size }: BoxIconProps) => {
  return (
    <div
      style={{
        backgroundColor: bg ? "var(--bg-700)" : "transparent",
        height: size,
      }}
      className={style.box}
    >
      <Icon />
    </div>
  );
};

export default BoxIcon;

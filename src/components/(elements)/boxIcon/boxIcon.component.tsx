import style from "./boxIcon.module.css";

interface BoxIconProps {
  Icon: any;
  size: string;
  bg?: boolean;
  backgroundColor?: string;
  fill?: string;
}

const BoxIcon = ({ fill, Icon, bg, size, backgroundColor }: BoxIconProps) => {
  return (
    <div
      style={{
        backgroundColor: bg
          ? backgroundColor
            ? backgroundColor
            : "var(--bg-700)"
          : "transparent",
        height: size,
      }}
      className={style.box}
    >
      <Icon style={{ fill: fill ? fill : undefined }} />
    </div>
  );
};

export default BoxIcon;

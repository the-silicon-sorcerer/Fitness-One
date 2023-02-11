import style from "./svgIcon.module.css";

interface SvgIconProps {
  Icon: any;
  size: string;
}

const SvgIcon = ({ Icon, size }: SvgIconProps) => {
  return (
    <div style={{ height: size }} className={style.container}>
      <Icon />
    </div>
  );
};

export default SvgIcon;

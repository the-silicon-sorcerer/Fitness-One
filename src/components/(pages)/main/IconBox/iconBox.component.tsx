import Link from "next/link";
import BoxIcon from "../../../(elements)/boxIcon/boxIcon.component";
import style from "./iconBox.module.css";

interface IconBoxProps {
  Icon: any;
  text: string;
  End?: any;
  link?: string;
  skeleton?: boolean;
}

const IconBox = ({ Icon, text, End, link, skeleton }: IconBoxProps) => {
  if (skeleton) {
    return <div className={`${style.skelContainer} skeleton`}></div>;
  }

  return (
    <>
      {link ? (
        <Link href={link}>
          <div className={style.container}>
            <div className={style.main}>
              <BoxIcon
                Icon={Icon}
                size="30px"
                bg
                backgroundColor="var(--bg-600)"
                fill="var(--bg-700)"
              />
              <p className="body-B-Small">{text}</p>
            </div>
            {End && (
              <div className={style.end}>
                <End />
              </div>
            )}
          </div>
        </Link>
      ) : (
        <div className={style.container}>
          <div className={style.main}>
            <BoxIcon
              Icon={Icon}
              size="30px"
              bg
              backgroundColor="var(--bg-600)"
              fill="var(--bg-700)"
            />
            <p className="body-B-Small">{text}</p>
          </div>
          {End && (
            <div className={style.end}>
              <End />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default IconBox;

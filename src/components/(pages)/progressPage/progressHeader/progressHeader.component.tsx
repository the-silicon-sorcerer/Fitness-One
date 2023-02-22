import style from "./progressHeader.module.css";

interface ProgressHeaderProps {
  heading: string;
  subHeading: string;
}

const ProgressHeader = ({ heading, subHeading }: ProgressHeaderProps) => {
  return (
    <div style={{ marginBottom: "25px" }} className={style.heading}>
      <h4>{heading}</h4>
      <p className="body-Small">{subHeading}</p>
    </div>
  );
};

export default ProgressHeader;

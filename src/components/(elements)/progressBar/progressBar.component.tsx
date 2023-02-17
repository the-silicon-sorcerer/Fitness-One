import style from "./progressBar.module.css";

interface ProgressBarProps {
  events: number;
}

const ProgressBar = ({ events }: ProgressBarProps) => {
  const createEvents = () => {
    let indicators = [];
    for (let i = 1; i <= events; i++) {
      indicators.push(<div key={i} className={style.indicator}></div>);
    }
    return indicators;
  };

  return <div className={style.progress}>{createEvents()}</div>;
};

export default ProgressBar;

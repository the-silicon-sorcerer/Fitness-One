import ProgressHeader from "../progressHeader/progressHeader.component";

import style from "./finalMessage.module.css";

interface FinalMessageProps {
  heading: string;
  subheading: string;
}

const FinalMessage = ({ heading, subheading }: FinalMessageProps) => {
  return (
    <div className={style.finalContainer}>
      <ProgressHeader heading={heading} subHeading={subheading} />
    </div>
  );
};

export default FinalMessage;

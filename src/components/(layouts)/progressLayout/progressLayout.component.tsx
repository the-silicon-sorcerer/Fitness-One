import ProgressBar from "../../(elements)/progressBar/progressBar.component";
import ProgressFooter from "../../(elements)/progressFooter/progressFooter.component";

interface ProgressLayoutProps {
  events: number;
  children: React.ReactNode;
}

const ProgressLayout = ({ events, children }: ProgressLayoutProps) => {
  return (
    <>
      <ProgressBar events={events} />
      {children}
      <ProgressFooter />
    </>
  );
};

export default ProgressLayout;

import ProgressLayout from "../../../../components/(pages)/progressPage/progressLayout/progressLayout.component";
import {
  FitnessSetupContext,
  FitnessSetupContextProvider,
} from "../../../../contexts/fitnessSetupContext/fitnessContext";

const FitnessLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FitnessSetupContextProvider>
      <ProgressLayout events={2} context={FitnessSetupContext}>
        {children}
      </ProgressLayout>
    </FitnessSetupContextProvider>
  );
};

export default FitnessLayout;

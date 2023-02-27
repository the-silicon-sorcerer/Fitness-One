import ProgressLayout from "../../../../components/(pages)/progressPage/progressLayout/progressLayout.component";
import {
  NutritionSetupContext,
  NutritionContextProvider,
} from "../../../../contexts/nutritionSetupContext/nutritionSetupContext";

const NutrtionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NutritionContextProvider>
      <ProgressLayout events={2} context={NutritionSetupContext}>
        {children}
      </ProgressLayout>
    </NutritionContextProvider>
  );
};

export default NutrtionLayout;

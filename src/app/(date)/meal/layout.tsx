import { MealContextProvider } from "../../../contexts/mealContext/mealContext";

const MealLayout = ({ children }: { children: React.ReactNode }) => {
  return <MealContextProvider>{children}</MealContextProvider>;
};

export default MealLayout;

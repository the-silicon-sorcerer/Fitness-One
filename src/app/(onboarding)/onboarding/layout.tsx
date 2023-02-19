"use client";
import { OnboardingProvider } from "../../../contexts/onboardingContext";
import { OnboaringContext } from "../../../contexts/onboardingContext";
import ProgressLayout from "../../../components/(layouts)/progressLayout/progressLayout.component";

const onboardingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <OnboardingProvider>
      <ProgressLayout context={OnboaringContext} events={3}>
        {children}
      </ProgressLayout>
    </OnboardingProvider>
  );
};

export default onboardingLayout;

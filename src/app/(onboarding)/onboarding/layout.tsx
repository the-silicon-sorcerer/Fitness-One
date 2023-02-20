import { OnboardingProvider } from "../../../contexts/onboardingContext";
import { OnboaringContext } from "../../../contexts/onboardingContext";
import ProgressLayout from "../../../components/(layouts)/progressLayout/progressLayout.component";
import getServerSession from "../../../utils/getServerSession";
import { redirect } from "next/navigation";

const onboardingLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  return (
    <OnboardingProvider>
      <ProgressLayout context={OnboaringContext} events={3}>
        {children}
      </ProgressLayout>
    </OnboardingProvider>
  );
};

export default onboardingLayout;

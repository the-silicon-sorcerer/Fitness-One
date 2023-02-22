import { redirect } from "next/navigation";
import { prisma } from "../../../server/db";

import { OnboardingProvider } from "../../../contexts/onboardingContext";
import { OnboaringContext } from "../../../contexts/onboardingContext";
import ProgressLayout from "../../../components/(layouts)/progressLayout/progressLayout.component";
import getServerSession from "../../../utils/getServerSession";

const onboardingLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/dashboard");
  }
  const user =
    session.user &&
    (await prisma.user.findUnique({
      where: { id: session.user.id },
    }));

  // Assumes setup done if gender is defined
  if (user?.gender !== null) {
    redirect("/dashboard");
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

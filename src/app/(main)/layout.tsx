import { redirect } from "next/navigation";

import getServerSession from "../../utils/getServerSession";
import Navigation from "../../components/(pages)/main/navigation/navigation.component";
import { MainContextProvider } from "../../contexts/main/mainContext";
import { prisma } from "../../server/db";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  if (!session) redirect("/welcome");

  const user = await prisma?.user.findUnique({
    where: { id: session.user?.id },
  });

  // assumes not proporly onboarded

  if (user?.gender === null) redirect("/onboarding");

  return (
    <MainContextProvider>
      {children}
      <Navigation />
    </MainContextProvider>
  );
};

export default MainLayout;

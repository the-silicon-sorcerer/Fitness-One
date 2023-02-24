import { redirect } from "next/navigation";

import getServerSession from "../../utils/getServerSession";
import Navigation from "../../components/(pages)/main/navigation/navigation.component";
import { MainContextProvider } from "../../contexts/main/mainContext";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  if (!session) redirect("/welcome");

  return (
    <MainContextProvider>
      {children}
      <Navigation />
    </MainContextProvider>
  );
};

export default MainLayout;

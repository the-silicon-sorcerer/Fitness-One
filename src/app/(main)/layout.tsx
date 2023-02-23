import { redirect } from "next/navigation";

import getServerSession from "../../utils/getServerSession";
import Navigation from "../../components/(pages)/main/navigation/navigation.component";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  if (!session) redirect("/welcome");

  return (
    <div>
      {children}
      <Navigation />
    </div>
  );
};

export default MainLayout;

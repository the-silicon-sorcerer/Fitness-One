import { redirect } from "next/navigation";

import getServerSession from "../../utils/getServerSession";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  if (!session) redirect("/welcome");

  return <div>{children}</div>;
};

export default MainLayout;

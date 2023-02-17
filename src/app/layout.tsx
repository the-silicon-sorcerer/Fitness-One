import { TrpcProvider } from "../utils/trpcProvider";
import { Inter } from "@next/font/google";
import getServerSession from "../utils/getServerSession";
import AuthProvider from "../utils/authProvider";

import "../styles/globals.css";

const inter = Inter();

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  return (
    <html lang="en" className={inter.className}>
      <head />
      <TrpcProvider>
        <AuthProvider>
          <body>
            <p style={{ position: "fixed" }}>
              {session?.user ? "Logged in" : "No account"}
            </p>
            {children}
          </body>
        </AuthProvider>
      </TrpcProvider>
    </html>
  );
};

export default RootLayout;

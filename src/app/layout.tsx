import AuthProvider from "../utils/authProvider";
import { TrpcProvider } from "../utils/trpcProvider";
import localFont from "@next/font/local";

import "../styles/globals.css";

const inter = localFont({ src: "../../public/fonts/inter.ttf" });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <TrpcProvider>
        <AuthProvider>
          <body>{children}</body>
        </AuthProvider>
      </TrpcProvider>
    </html>
  );
};

export default RootLayout;

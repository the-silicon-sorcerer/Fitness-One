import { Montserrat } from "@next/font/google";
import localFont from "@next/font/local";

const montserrat = localFont({ src: "../../../public/fonts/montserrat.ttf" });

interface LogoProps {
  size: string;
  color: string;
}

const Logo = ({ size, color }: LogoProps) => {
  return (
    <p
      className={montserrat.className}
      style={{
        fontSize: size,
        color: color,
        fontWeight: "900",
        letterSpacing: "-0.08em",
      }}
    >
      FITNESS ONE
    </p>
  );
};

export default Logo;

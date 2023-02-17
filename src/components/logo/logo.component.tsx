import { Montserrat } from "@next/font/google";

const montserrat = Montserrat();

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
        fontStyle: "italic",
      }}
    >
      FITNESS ONE
    </p>
  );
};

export default Logo;

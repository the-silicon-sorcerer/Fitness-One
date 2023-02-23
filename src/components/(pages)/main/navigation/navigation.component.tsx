import Link from "next/link";
import style from "./navigation.module.css";
import {
  DumbellIconLarge,
  HomeIconLarge,
  NutritionIcon,
  NutritionIconLarge,
  UserIconLarge,
} from "../../../(svg)";

const Navigation = () => {
  return (
    <div className={style.container}>
      <Link href="/">
        <HomeIconLarge />
      </Link>
      <Link href="/fitness">
        <DumbellIconLarge />
      </Link>
      <Link href="/">
        <NutritionIconLarge />
      </Link>
      <Link href="/">
        <UserIconLarge />
      </Link>
    </div>
  );
};

export default Navigation;

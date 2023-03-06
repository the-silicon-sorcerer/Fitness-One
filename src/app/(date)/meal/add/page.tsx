"use client";

import CategorySlider from "../../../../components/(pages)/date/categorySlider/categorySlider.component";
import Buffer from "../../../../components/(elements)/buffer/buffer.component";
import DateHeader from "../../../../components/(pages)/date/dateHeader/dateHeader.component";
import style from "./page.module.css";
import ViewAllBox from "../../../../components/(elements)/viewAllBox/viewAllBox.component";
import { useContext } from "react";
import { MealContext } from "../../../../contexts/mealContext/mealContext";
import { captializeFirst } from "../../../../utils/capitalizeFirst";
import IconBox from "../../../../components/(pages)/main/IconBox/iconBox.component";
import { trpc } from "../../../../utils/trpcProvider";
import { v4 as uuidv4 } from "uuid";
import {
  InfoIcon,
  InfoIconSmall,
  dumbBellIconSmall,
} from "../../../../components/(svg)";

const AddMeal = () => {
  const { mealState, mealDispatch } = useContext(MealContext);
  const limitedCat = trpc.nutritionRouter.getLimitedCategory.useQuery({
    category: mealState.category,
  });

  const generateOptions = () => {
    const arr = [];
    if (!limitedCat.isLoading && limitedCat.data) {
      for (const option of limitedCat.data) {
        arr.push(
          <IconBox
            key={uuidv4()}
            Icon={dumbBellIconSmall}
            End={InfoIconSmall}
            text={captializeFirst(option.name)}
          />
        );
      }
    }
    return arr;
  };

  const generateSkeletons = () => {
    const arr = [];
    for (let i = 1; i <= 3; i++) {
      arr.push(<IconBox key={uuidv4()} Icon="" text="" skeleton />);
    }
    return arr;
  };

  return (
    <div className={style.container}>
      <DateHeader />
      <Buffer height="92.8px" />
      <CategorySlider />
      <ViewAllBox title={captializeFirst(mealState.category)}>
        {limitedCat.isLoading ? generateSkeletons() : generateOptions()}
      </ViewAllBox>
    </div>
  );
};

export default AddMeal;

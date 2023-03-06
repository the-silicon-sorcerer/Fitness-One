"use client";

import { v4 as uuidv4 } from "uuid";

import style from "./categorySlider.module.css";
import { useContext } from "react";
import { MealContext } from "../../../../contexts/mealContext/mealContext";

const CategorySlider = () => {
  const { mealState, mealDispatch } = useContext(MealContext);

  const onClick = (category: string) => {
    mealDispatch({
      type: "SET_CATEGORY",
      payload: { category: category.toUpperCase() },
    });
  };

  const generateOption = (...args: string[]) => {
    const arr = [];
    for (const option of args) {
      arr.push(
        <p
          onClick={() => onClick(option)}
          style={{
            color:
              mealState.category === option.toUpperCase()
                ? "var(--bg-600)"
                : "var(--bg-700)",
            fontWeight:
              mealState.category === option.toUpperCase() ? "600" : "none",
          }}
          className="body-Small"
          key={uuidv4()}
        >
          {option}
        </p>
      );
    }
    return arr;
  };
  return (
    <div className={style.container}>
      {generateOption(
        "Recent",
        "Favorites",
        "Custom",
        "Meats",
        "Fruits",
        "Vegetables",
        "Snacks",
        "All"
      )}
    </div>
  );
};

export default CategorySlider;

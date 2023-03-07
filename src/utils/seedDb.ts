export interface FoodObj {
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fats: number;
  category: string;
}

export const foodData: FoodObj[] = [
  {
    name: "APPLE",
    calories: 95,
    carbs: 25,
    protein: 0.5,
    fats: 0.3,
    category: "FRUITS",
  },
  {
    name: "BANANA",
    calories: 105,
    carbs: 27,
    protein: 1.3,
    fats: 0.1,
    category: "FRUITS",
  },
  {
    name: "BLUE_BERRIES",
    calories: 85,
    carbs: 21,
    protein: 1.1,
    fats: 0.5,
    category: "FRUITS",
  },
  {
    name: "BELL_PEPPER",
    calories: 25,
    carbs: 6,
    protein: 1,
    fats: 6,
    category: "VEGETABLES",
  },
  {
    name: "BROCCOLI",
    calories: 45,
    carbs: 8,
    protein: 4,
    fats: 0.5,
    category: "VEGETABLES",
  },
  {
    name: "ONION",
    calories: 45,
    carbs: 11,
    protein: 1,
    fats: 0,
    category: "VEGETABLES",
  },
  {
    name: "STEAK",
    calories: 134,
    carbs: 0,
    protein: 23,
    fats: 4.5,
    category: "MEATS",
  },
  {
    name: "BACON",
    calories: 215,
    carbs: 0,
    protein: 16.5,
    fats: 16.5,
    category: "MEATS",
  },
  {
    name: "CHICKEN",
    calories: 109,
    carbs: 0,
    protein: 20.9,
    fats: 2.8,
    category: "MEATS",
  },
];

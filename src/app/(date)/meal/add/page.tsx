"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CategorySlider from "../../../../components/(pages)/date/categorySlider/categorySlider.component";
import Buffer from "../../../../components/(elements)/buffer/buffer.component";
import DateHeader from "../../../../components/(pages)/date/dateHeader/dateHeader.component";
import ViewAllBox from "../../../../components/(elements)/viewAllBox/viewAllBox.component";
import IconBox from "../../../../components/(pages)/main/IconBox/iconBox.component";
import DropInput from "../../../../components/(forms)/dropInput/dropInput.component";
import TextInput from "../../../../components/(forms)/textInput/textInput.component";
import ButtonLarge from "../../../../components/(buttons)/buttonLarge/buttonLarge.component";
import { InfoIconSmall, dumbBellIconSmall } from "../../../../components/(svg)";

import { MealContext } from "../../../../contexts/mealContext/mealContext";
import { captializeFirst } from "../../../../utils/capitalizeFirst";
import { trpc } from "../../../../utils/trpcProvider";
import { MealContextState } from "../../../../contexts/mealContext/mealContext";
import { submitSchemea } from "../../../../contexts/mealContext/mealContext";

import style from "./page.module.css";

const AddMeal = () => {
  const { formState, formDispatch } = useContext(MealContext);
  const [payload, setPayload] = useState(formState);

  const mutation = trpc.nutritionRouter.addMeal.useMutation();
  const limitedCat = trpc.nutritionRouter.getLimitedCategory.useQuery({
    category: formState.category || "",
  });

  const router = useRouter();

  useEffect(() => {
    formDispatch({ type: "SET_DATA", payload: payload });
  }, [payload]);

  const generateOptions = () => {
    const arr = [];
    if (!limitedCat.isLoading && limitedCat.data) {
      for (const option of limitedCat.data) {
        const onClick = () => {
          formDispatch({ type: "SET_DATA", payload: { food: option.id } });
        };

        arr.push(
          <div key={option.name} onClick={() => onClick()}>
            <IconBox
              Icon={dumbBellIconSmall}
              End={InfoIconSmall}
              text={captializeFirst(option.name)}
              selected={formState.food === option.id}
            />
          </div>
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

  const onSubmit = (data: MealContextState) => {
    if (submitSchemea.safeParse(data).success) {
      console.log(data);
      mutation.mutate({
        // @ts-expect-error not detecting zod
        foodId: data.food,
        // @ts-expect-error not detecting zod
        servings: data.servings,
        // @ts-expect-error not detecting zod
        mealType: data.meal,
        category: data.category,
      });
      router.push("/nutrition");
    }
  };

  return (
    <div className={style.container}>
      <DateHeader />
      <Buffer height="92.8px" />
      <CategorySlider />
      {formState.category && (
        <ViewAllBox title={captializeFirst(formState.category)}>
          {limitedCat.isLoading ? generateSkeletons() : generateOptions()}
        </ViewAllBox>
      )}
      <DropInput
        Icon={dumbBellIconSmall}
        placeholder="Select meal"
        options={["Brakefast", "Lunch", "Dinner", "Snack"]}
        field="meal"
        currState={payload}
        setState={setPayload}
        context={MealContext}
      />
      <TextInput
        type="number"
        Icon={dumbBellIconSmall}
        placeholder="Serving ammount"
        field="servings"
        currState={payload}
        setState={setPayload}
        context={MealContext}
      />
      <ButtonLarge text="+ Add meal" onClick={() => onSubmit(formState)} />
    </div>
  );
};

export default AddMeal;

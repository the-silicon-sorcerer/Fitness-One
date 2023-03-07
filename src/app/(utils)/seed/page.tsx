"use client";

import { foodData } from "../../../utils/seedDb";
import { trpc } from "../../../utils/trpcProvider";

const SeedDbPage = () => {
  const mutation = trpc.seed.seed.useMutation();

  const onClick = () => {
    for (const food of foodData) {
      mutation.mutate(food);
    }
  };

  return <button onClick={() => onClick()}>Seed</button>;
};

export default SeedDbPage;

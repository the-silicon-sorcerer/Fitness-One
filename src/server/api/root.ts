import { createTRPCRouter } from "./trpc";

import { setupRouter } from "./routers/setupRouter";
import { userRouter } from "./routers/userRouter";
import { NutrtionRouter } from "./routers/nutritionRouter";
import { seedRouter } from "./routers/seedRouter";

export const appRouter = createTRPCRouter({
  setup: setupRouter,
  userRouter: userRouter,
  nutritionRouter: NutrtionRouter,
  seed: seedRouter,
});

export type AppRouter = typeof appRouter;

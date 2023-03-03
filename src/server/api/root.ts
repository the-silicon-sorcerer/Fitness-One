import { createTRPCRouter } from "./trpc";

import { setupRouter } from "./routers/setupRouter";
import { userRouter } from "./routers/userRouter";
import { NutrtionRouter } from "./routers/nutritionRouter";

export const appRouter = createTRPCRouter({
  setup: setupRouter,
  userRouter: userRouter,
  nutritionRouter: NutrtionRouter,
});

export type AppRouter = typeof appRouter;

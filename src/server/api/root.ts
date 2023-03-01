import { createTRPCRouter } from "./trpc";

import { setupRouter } from "./routers/setupRouter";
import { userRouter } from "./routers/userRouter";

export const appRouter = createTRPCRouter({
  setup: setupRouter,
  userRouter: userRouter,
});

export type AppRouter = typeof appRouter;

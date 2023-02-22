import { createTRPCRouter } from "./trpc";

import { setupRouter } from "./routers/setupRouter";

export const appRouter = createTRPCRouter({
  setup: setupRouter,
});

export type AppRouter = typeof appRouter;

import { TRPCError } from "@trpc/server";
import { protectedProcedure, createTRPCRouter } from "../trpc";

export const userRouter = createTRPCRouter({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });
    return user;
  }),
});

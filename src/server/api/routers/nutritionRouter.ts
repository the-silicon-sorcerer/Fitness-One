import moment from "moment";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import z, { string } from "zod";
import { TRPCError } from "@trpc/server";

export const NutrtionRouter = createTRPCRouter({
  getMeals: protectedProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ ctx, input }) => {
      const date = moment(input.date);
      const meals = await ctx.prisma.meal.findMany({
        where: {
          //   userId: ctx.session.user.id,
          date: {
            gte: date.toDate(),
            lte: date.add(1, "day").toDate(),
          },
          userId: ctx.session.user.id,
        },
        include: {
          food: true,
        },
      });
      if (!meals) throw new TRPCError({ code: "NOT_FOUND" });
      return meals;
    }),
  addMeal: protectedProcedure
    .input(z.object({ foodId: z.string(), servings: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const newMeal = await ctx.prisma.meal.create({
        data: {
          servings: input.servings,
          foodId: input.foodId,
          userId: ctx.session.user.id,
        },
      });
      if (!newMeal) throw new TRPCError({ code: "NOT_FOUND" });
      return newMeal;
    }),
});

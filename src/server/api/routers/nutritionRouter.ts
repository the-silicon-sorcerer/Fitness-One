import moment from "moment";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import z from "zod";
import { TRPCError } from "@trpc/server";

export const NutrtionRouter = createTRPCRouter({
  getMeals: protectedProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ ctx, input }) => {
      const date = moment(input.date);
      const meals = await ctx.prisma.meal.findMany({
        where: {
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
    .input(
      z.object({
        foodId: z.string(),
        servings: z.number().max(99),
        mealType: z.union([
          z.literal("BRAKEFAST"),
          z.literal("LUNCH"),
          z.literal("DINNER"),
          z.literal("SNACK"),
        ]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const newMeal = await ctx.prisma.meal.create({
        data: {
          servings: input.servings,
          meal_type: input.mealType,
          foodId: input.foodId,
          userId: ctx.session.user.id,
        },
      });
      if (!newMeal) throw new TRPCError({ code: "NOT_FOUND" });
      return newMeal;
    }),
  getLimitedCategory: protectedProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ ctx, input }) => {
      const query = ctx.prisma.food.findMany({
        where: {
          category: input.category,
        },
        take: 3,
      });
      if (!query) throw new TRPCError({ code: "NOT_FOUND" });
      return query;
    }),
});

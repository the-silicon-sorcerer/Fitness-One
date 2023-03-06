import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import z from "zod";

export const seedRouter = createTRPCRouter({
  seed: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        calories: z.number(),
        carbs: z.number(),
        protein: z.number(),
        fats: z.number(),
        category: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const mutation = await ctx.prisma.food.create({
        data: {
          name: input.name,
          calories: input.calories,
          carbs: input.carbs,
          protein: input.protein,
          fat: input.fats,
          category: input.category,
        },
      });
      if (!mutation) throw new TRPCError({ code: "BAD_REQUEST" });
      return mutation;
    }),
});

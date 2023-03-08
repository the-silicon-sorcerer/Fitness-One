import { protectedProcedure, createTRPCRouter } from "../trpc";
import { TRPCError } from "@trpc/server";

import { OnboardingSchema } from "../../../contexts/onboarding/onboardingContext";
import { FitnessSchema } from "../../../contexts/fitnessSetupContext/fitnessContext";
import { NutritionSchema } from "../../../contexts/nutritionSetupContext/nutritionSetupContext";

export const setupRouter = createTRPCRouter({
  onboarding: protectedProcedure
    .input(OnboardingSchema)
    .mutation(async ({ input, ctx }) => {
      const mutation = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          name: `${input.firstName
            .charAt(0)
            .toLocaleUpperCase()
            .concat(input.firstName.toLowerCase().slice(1))} ${input.lastName
            .charAt(0)
            .toLocaleUpperCase()
            .concat(input.lastName.toLowerCase().slice(1))}`,
          weight: input.weight,
          height: input.height,
          age: input.age,
          gender: input.gender,
          weightGoal: input.weightGoal,
          experience: input.experience,
          lifing_goal: input.fitnessGoal,
          nutrition_goal: input.nutritionGoal,
        },
      });
      if (!mutation) throw new TRPCError({ code: "BAD_REQUEST" });

      return mutation;
    }),
  fitnessPlan: protectedProcedure
    .input(FitnessSchema)
    .mutation(async ({ ctx, input }) => {
      const mutation = await ctx.prisma.fitness_Plan.create({
        data: {
          split: input.split,
          monday: input.monday,
          tuesday: input.tuesday,
          wednesday: input.wednesday,
          thursday: input.thursday,
          friday: input.friday,
          saturday: input.saturday,
          sunday: input.sunday,
          userId: ctx.session.user.id,
        },
      });
      if (!mutation) throw new TRPCError({ code: "BAD_REQUEST" });

      return mutation;
    }),
  nutritionPlan: protectedProcedure
    .input(NutritionSchema)
    .mutation(async ({ ctx, input }) => {
      const mutation = await ctx.prisma.nutrition_Plan.create({
        data: {
          calories: input.calories,
          protein: input.protein,
          carbs: input.carbs,
          fat: input.fat,
          water: input.water,
          userId: ctx.session.user.id,
        },
      });
      if (!mutation) throw new TRPCError({ code: "BAD_REQUEST" });

      return mutation;
    }),
});

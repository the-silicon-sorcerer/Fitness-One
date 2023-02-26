import { protectedProcedure, createTRPCRouter } from "../trpc";
import { prisma } from "../../db";

import { OnboardingSchema } from "../../../contexts/onboarding/onboardingContext";
import { FitnessSchema } from "../../../contexts/fitnessSetupContext/fitnessContext";
import { TRPCError } from "@trpc/server";

export const setupRouter = createTRPCRouter({
  onboarding: protectedProcedure
    .input(OnboardingSchema)
    .mutation(async ({ input, ctx }) => {
      const mutation = await prisma.user.update({
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
      const mutation = await ctx.prisma.fintess_Plan.create({
        data: {
          split: input.split,
          DPW: input.DPW,
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
});

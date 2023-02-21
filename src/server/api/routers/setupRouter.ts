import { protectedProcedure, createTRPCRouter } from "../trpc";
import { OnboardingSchema } from "../../../contexts/onboardingContext";
import { prisma } from "../../db";

export const setupRouter = createTRPCRouter({
  insert: protectedProcedure
    .input(OnboardingSchema)
    .mutation(async ({ input, ctx }) => {
      const updates = await prisma.user.update({
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
      return updates;
    }),
});

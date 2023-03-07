/*
  Warnings:

  - Added the required column `meal_type` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('BRAKEFAST', 'LUNCH', 'DINNER');

-- AlterTable
ALTER TABLE "Meal" ADD COLUMN     "meal_type" "MealType" NOT NULL;

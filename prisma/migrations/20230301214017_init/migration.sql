/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Nutrition_Plan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Nutrition_Plan_userId_key" ON "Nutrition_Plan"("userId");

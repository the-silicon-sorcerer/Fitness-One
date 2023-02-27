/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Fintess_Plan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Fintess_Plan_userId_key" ON "Fintess_Plan"("userId");

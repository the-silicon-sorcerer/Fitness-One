/*
  Warnings:

  - You are about to drop the `Fintess_Plan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `calories` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carbs` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Fintess_Plan" DROP CONSTRAINT "Fintess_Plan_userId_fkey";

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "calories" TEXT NOT NULL,
ADD COLUMN     "carbs" TEXT NOT NULL,
ADD COLUMN     "fat" TEXT NOT NULL,
ADD COLUMN     "protein" TEXT NOT NULL;

-- DropTable
DROP TABLE "Fintess_Plan";

-- CreateTable
CREATE TABLE "Fitness_Plan" (
    "id" TEXT NOT NULL,
    "split" "Avalible_Splits" NOT NULL,
    "monday" TEXT NOT NULL,
    "tuesday" TEXT NOT NULL,
    "wednesday" TEXT NOT NULL,
    "thursday" TEXT NOT NULL,
    "friday" TEXT NOT NULL,
    "saturday" TEXT NOT NULL,
    "sunday" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Fitness_Plan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fitness_Plan_userId_key" ON "Fitness_Plan"("userId");

-- AddForeignKey
ALTER TABLE "Fitness_Plan" ADD CONSTRAINT "Fitness_Plan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

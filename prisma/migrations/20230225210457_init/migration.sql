/*
  Warnings:

  - You are about to drop the column `Friday` on the `Fintess_Plan` table. All the data in the column will be lost.
  - You are about to drop the column `Saturday` on the `Fintess_Plan` table. All the data in the column will be lost.
  - You are about to drop the column `Sunday` on the `Fintess_Plan` table. All the data in the column will be lost.
  - Added the required column `friday` to the `Fintess_Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saturday` to the `Fintess_Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sunday` to the `Fintess_Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fintess_Plan" DROP COLUMN "Friday",
DROP COLUMN "Saturday",
DROP COLUMN "Sunday",
ADD COLUMN     "friday" TEXT NOT NULL,
ADD COLUMN     "saturday" TEXT NOT NULL,
ADD COLUMN     "sunday" TEXT NOT NULL;

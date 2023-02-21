/*
  Warnings:

  - The `weight` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Experience" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "experience" "Experience",
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "height" INTEGER,
ADD COLUMN     "weightGoal" INTEGER,
DROP COLUMN "weight",
ADD COLUMN     "weight" INTEGER;

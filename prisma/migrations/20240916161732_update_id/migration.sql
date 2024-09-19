/*
  Warnings:

  - The primary key for the `Restaurant` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id");

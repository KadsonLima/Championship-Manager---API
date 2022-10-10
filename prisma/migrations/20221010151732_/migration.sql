/*
  Warnings:

  - Added the required column `curriculum` to the `candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "candidate" ADD COLUMN     "curriculum" TEXT NOT NULL;

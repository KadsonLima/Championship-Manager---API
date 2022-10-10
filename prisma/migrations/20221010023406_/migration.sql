/*
  Warnings:

  - You are about to drop the column `experience` on the `experience` table. All the data in the column will be lost.
  - Added the required column `name` to the `experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "experience" DROP COLUMN "experience",
ADD COLUMN     "name" TEXT NOT NULL;

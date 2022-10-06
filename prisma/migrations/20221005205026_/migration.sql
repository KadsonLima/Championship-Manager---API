/*
  Warnings:

  - A unique constraint covering the columns `[numberContact]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `numberContact` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "team" ADD COLUMN     "numberContact" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "team_numberContact_key" ON "team"("numberContact");

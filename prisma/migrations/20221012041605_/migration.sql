/*
  Warnings:

  - You are about to drop the column `numberContact` on the `candidate` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "candidate_numberContact_key";

-- AlterTable
ALTER TABLE "candidate" DROP COLUMN "numberContact";

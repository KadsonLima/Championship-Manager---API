/*
  Warnings:

  - You are about to drop the column `name` on the `championship` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "championship_name_key";

-- AlterTable
ALTER TABLE "championship" DROP COLUMN "name",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

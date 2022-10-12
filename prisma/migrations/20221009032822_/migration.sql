/*
  Warnings:

  - Changed the type of `experience` on the `experience` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `description` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "jobs_name_key";

-- AlterTable
ALTER TABLE "experience" DROP COLUMN "experience",
ADD COLUMN     "experience" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "description" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ExpType";

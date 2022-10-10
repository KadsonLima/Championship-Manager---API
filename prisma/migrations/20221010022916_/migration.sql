/*
  Warnings:

  - You are about to drop the column `expId` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `tagId` on the `jobs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_expId_fkey";

-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_tagId_fkey";

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "expId",
DROP COLUMN "tagId",
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);

-- CreateTable
CREATE TABLE "jobAndExperience" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "experienceId" INTEGER NOT NULL,

    CONSTRAINT "jobAndExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobAndTags" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "jobAndTags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jobAndExperience" ADD CONSTRAINT "jobAndExperience_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobAndExperience" ADD CONSTRAINT "jobAndExperience_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobAndTags" ADD CONSTRAINT "jobAndTags_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobAndTags" ADD CONSTRAINT "jobAndTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `championship` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `championshipAndTeam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `groups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teamComposition` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ExpType" AS ENUM ('Junior', 'Pleno', 'Senior');

-- DropForeignKey
ALTER TABLE "championshipAndTeam" DROP CONSTRAINT "championshipAndTeam_campId_fkey";

-- DropForeignKey
ALTER TABLE "championshipAndTeam" DROP CONSTRAINT "championshipAndTeam_teamId_fkey";

-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_teamId_fkey";

-- DropForeignKey
ALTER TABLE "team" DROP CONSTRAINT "team_compositionId_fkey";

-- DropTable
DROP TABLE "championship";

-- DropTable
DROP TABLE "championshipAndTeam";

-- DropTable
DROP TABLE "groups";

-- DropTable
DROP TABLE "team";

-- DropTable
DROP TABLE "teamComposition";

-- DropEnum
DROP TYPE "RacesType";

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "tagId" INTEGER NOT NULL,
    "expId" INTEGER NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobAndCandidate" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "candidateId" INTEGER NOT NULL,

    CONSTRAINT "jobAndCandidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "numberContact" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "experience" "ExpType" NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "jobs_name_key" ON "jobs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "jobs_link_key" ON "jobs"("link");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_numberContact_key" ON "candidate"("numberContact");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_email_key" ON "candidate"("email");

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_expId_fkey" FOREIGN KEY ("expId") REFERENCES "experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobAndCandidate" ADD CONSTRAINT "jobAndCandidate_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobAndCandidate" ADD CONSTRAINT "jobAndCandidate_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

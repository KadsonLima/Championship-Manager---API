/*
  Warnings:

  - You are about to drop the column `campId` on the `team` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "team" DROP CONSTRAINT "team_campId_fkey";

-- AlterTable
ALTER TABLE "team" DROP COLUMN "campId";

-- CreateTable
CREATE TABLE "championshipAndTeam" (
    "id" SERIAL NOT NULL,
    "campId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "championshipAndTeam_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "championshipAndTeam" ADD CONSTRAINT "championshipAndTeam_campId_fkey" FOREIGN KEY ("campId") REFERENCES "championship"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "championshipAndTeam" ADD CONSTRAINT "championshipAndTeam_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

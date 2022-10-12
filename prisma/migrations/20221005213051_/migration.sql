/*
  Warnings:

  - You are about to drop the column `lider` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `membro1` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `membro2` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `membro3` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `team` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nameLeader]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameMember1]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameMember2]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameMember3]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameLeader` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameMember1` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameMember2` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameMember3` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameTeam` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RacesType" AS ENUM ('WR', 'MG', 'WB', 'WF', 'EA', 'EP');

-- DropIndex
DROP INDEX "team_lider_key";

-- DropIndex
DROP INDEX "team_membro1_key";

-- DropIndex
DROP INDEX "team_membro2_key";

-- DropIndex
DROP INDEX "team_membro3_key";

-- AlterTable
ALTER TABLE "team" DROP COLUMN "lider",
DROP COLUMN "membro1",
DROP COLUMN "membro2",
DROP COLUMN "membro3",
DROP COLUMN "name",
ADD COLUMN     "nameLeader" TEXT NOT NULL,
ADD COLUMN     "nameMember1" TEXT NOT NULL,
ADD COLUMN     "nameMember2" TEXT NOT NULL,
ADD COLUMN     "nameMember3" TEXT NOT NULL,
ADD COLUMN     "nameTeam" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TeamComposition" (
    "id" SERIAL NOT NULL,
    "leader" "RacesType" NOT NULL,
    "member1" "RacesType" NOT NULL,
    "member2" "RacesType" NOT NULL,
    "member3" "RacesType" NOT NULL,

    CONSTRAINT "TeamComposition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "team_nameLeader_key" ON "team"("nameLeader");

-- CreateIndex
CREATE UNIQUE INDEX "team_nameMember1_key" ON "team"("nameMember1");

-- CreateIndex
CREATE UNIQUE INDEX "team_nameMember2_key" ON "team"("nameMember2");

-- CreateIndex
CREATE UNIQUE INDEX "team_nameMember3_key" ON "team"("nameMember3");

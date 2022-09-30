/*
  Warnings:

  - You are about to drop the column `email` on the `team` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[lider]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[membro1]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[membro2]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[membro3]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lider` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membro1` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membro2` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membro3` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "team_email_key";

-- AlterTable
ALTER TABLE "team" DROP COLUMN "email",
ADD COLUMN     "lider" TEXT NOT NULL,
ADD COLUMN     "membro1" TEXT NOT NULL,
ADD COLUMN     "membro2" TEXT NOT NULL,
ADD COLUMN     "membro3" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "team_lider_key" ON "team"("lider");

-- CreateIndex
CREATE UNIQUE INDEX "team_membro1_key" ON "team"("membro1");

-- CreateIndex
CREATE UNIQUE INDEX "team_membro2_key" ON "team"("membro2");

-- CreateIndex
CREATE UNIQUE INDEX "team_membro3_key" ON "team"("membro3");

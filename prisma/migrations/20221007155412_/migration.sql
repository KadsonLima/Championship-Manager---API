/*
  Warnings:

  - A unique constraint covering the columns `[teamId]` on the table `groups` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "groups_teamId_key" ON "groups"("teamId");

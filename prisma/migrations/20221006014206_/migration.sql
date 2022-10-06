/*
  Warnings:

  - You are about to drop the `TeamComposition` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `compositionId` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "team" ADD COLUMN     "compositionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "TeamComposition";

-- CreateTable
CREATE TABLE "teamComposition" (
    "id" SERIAL NOT NULL,
    "leader" "RacesType" NOT NULL,
    "member1" "RacesType" NOT NULL,
    "member2" "RacesType" NOT NULL,
    "member3" "RacesType" NOT NULL,

    CONSTRAINT "teamComposition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "teamComposition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "candidate" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "candidateTags" (
    "id" SERIAL NOT NULL,
    "candidateId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "candidateTags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "candidateTags" ADD CONSTRAINT "candidateTags_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidateTags" ADD CONSTRAINT "candidateTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

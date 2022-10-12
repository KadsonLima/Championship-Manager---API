/*
  Warnings:

  - You are about to drop the `Notice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Notice";

-- CreateTable
CREATE TABLE "notice" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notice_pkey" PRIMARY KEY ("id")
);

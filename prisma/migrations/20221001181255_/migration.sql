-- CreateTable
CREATE TABLE "Notice" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notice_pkey" PRIMARY KEY ("id")
);

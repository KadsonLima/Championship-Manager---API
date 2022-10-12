-- AlterTable
CREATE SEQUENCE "candidate_id_seq";
ALTER TABLE "candidate" ALTER COLUMN "id" SET DEFAULT nextval('candidate_id_seq');
ALTER SEQUENCE "candidate_id_seq" OWNED BY "candidate"."id";

import { Candidate } from "@prisma/client";
import { prisma } from "../config/database";
import { conflictError, notFoundError } from "../utils/errorUtils";

const create = async (body: Omit<Candidate, "id">) => {
  const result = await prisma.candidate.create({ data: body });

  return result;
};

const getCandidates = async () => {
  const result = await prisma.candidate.findMany({
    orderBy: { id: "desc" },
    select: {
      id: true,
      name: true,
      numberContact: true,
      email: true,
      curriculum: true,
    },
  });

  return result;
};

export { create, getCandidates };

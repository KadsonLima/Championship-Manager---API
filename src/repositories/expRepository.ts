import { prisma } from "../config/database";
import { conflictError, notFoundError } from "../utils/errorUtils";

const setExpJob = async (id:number, exps:number[]) =>{

  for( const exp of exps){
    await prisma.jobAndExperience.create({data:{jobId:id, experienceId:exp}})
  }

}

const getExps = async () =>{


  return await prisma.experience.findMany()


}





export { setExpJob, getExps };

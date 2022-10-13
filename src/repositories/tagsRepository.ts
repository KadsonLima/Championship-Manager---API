import { prisma } from "../config/database";
import { conflictError, notFoundError } from "../utils/errorUtils";

const create = async (name:string) => {

  const result = await prisma.tag.create({ data: {name:name} });

  return result;
};

const setTagsJob = async (id:number, tags:number[]) =>{

  for( const tag of tags){
    await prisma.jobAndTags.create({data:{jobId:id, tagId:tag}})
  }

}

const setTagsCandidate = async (id:number, tags:number[]) =>{

  // for( const tag of tags){
  //     await prisma.jobAndCandidate.create({data:{jobId:id, tagId:tag}})
  // }

}

const getTags = async () =>{

  const result = await prisma.tag.findMany();

  return result
}

export { create, getTags ,setTagsCandidate , setTagsJob};

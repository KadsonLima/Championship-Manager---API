import { Job } from "@prisma/client";
import { NotFoundError } from "@prisma/client/runtime";
import { accessSync } from "fs";
import {prisma} from "../config/database";
import { jobsData } from "../interfaces/jobsInterface";
import { conflictError, notFoundError } from "../utils/errorUtils";

const create = async (body:any) =>{

    const result = await prisma.job.create({data:body})

    return result

}

const changeJob = async (id:number) =>{

    const job = await prisma.job.findUnique({where:{id:id}})

    if(!job) throw notFoundError("Job not Found");

    return await prisma.job.update({where:{id:id}, data:{active:!job.active}})

     
}


const getJobs = async () =>{
    

    const result = await prisma.job.findMany({
        orderBy:{id:"desc"},
        select:{    
            id:true,
            name:true,
            active:true,
            tags:{
                select:{
                   tags:{
                    select:{
                        name:true,
                    }
                   }
                }
            },
            experience:{
                select:{
                    experience:{
                        select:{
                            name:true,
                        }
                    }
                }
            },
            _count:true,

        
        }
    })

    return result

}



const getJobById = async (id:number) =>{
    

    const result = await prisma.job.findFirst({where:{id:id},

        select:{
                    id:true,
                    name:true,
                    link:true,
                    createdAt:true,
                    description:true,
                    active:true,
                    tags:{
                        select:{
                           tags:{
                            select:{
                                name:true,
                            }
                           }
                        }
                    },
                    experience:{
                        select:{
                            experience:{
                                select:{
                                    name:true,
                                }
                            }
                        }
                    },
                    _count:true,
        
        }
        
    });

    if(!result) throw notFoundError("Job not Found")

    return result

}


const getCandidatures = async (id:number) =>{
    

    const result = await prisma.jobAndCandidate.findMany({where:{jobId:id},
        orderBy:{id:"asc"},
        select:{
            candidate:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                    curriculum:true,
                }
            }
        }
        
    })

    return result

}



export { create, changeJob, getJobs, getJobById, getCandidatures }

import { Job } from "@prisma/client";
import { accessSync } from "fs";
import {prisma} from "../config/database";
import { jobsData } from "../interfaces/jobsInterface";
import { conflictError, notFoundError } from "../utils/errorUtils";

const create = async (body:any) =>{

    const result = await prisma.job.create({data:body})

    return result

}

const changeJob = async (id:number) =>{

    const result = await prisma.job.update({where:{id:id}, data:{active:false}})

    return result

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
        
    })

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
                    numberContact:true,
                    email:true
                }
            }
        }
        
    })

    return result

}



export { create, changeJob, getJobs, getJobById, getCandidatures }
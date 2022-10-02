import { Championship } from "@prisma/client";
import {prisma} from "../database";
import { ChampionshipData } from "../interfaces/championshipInterface";
import { conflictError, notFoundError } from "../utils/errorUtils";

const create = async (body:ChampionshipData) =>{

    const result = await prisma.championship.findFirst({where:{name:body.name}})

    if(result) throw conflictError("Championship is already !")

    const championshipCreate = await prisma.championship.create({data:body})

    return championshipCreate

}

const getChampionships = async () =>{
    

    const result = await prisma.championship.findMany({
        select:{    
            name:true,
            id:true,
            _count:true,
            subscribes:{
                select:{
                    team:{
                        select:{
                            name:true,
                        }
                    },
                }
            }
            
            
        
        }
    })

    return result

}

const getChampionshipById = async (id:number) =>{
    console.log("dsadas", id)

    const result = await prisma.championship.findUnique({
        where:{id:id},
        select:{
            name:true,
            link:true,
            subscribes:{
                select:{
                    team:{
                        select:{
                            name:true,
                            lider:true,
                            membro1:true,
                            membro2:true,
                            membro3:true,
                        }
                    }
                }
            }
        }
    })

    return result

}

export {create, getChampionships, getChampionshipById}
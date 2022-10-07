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
                            nameTeam:true,
                        }
                    },
                }
            }
            
            
        
        }
    })

    return result

}

const getChampionshipById = async (id:number) =>{

    const result = await prisma.championship.findUnique({
        where:{id:id},
        select:{
            name:true,
            link:true,
            subscribes:{
                select:{
                    team:{
                        select:{
                            id:true,
                            nameTeam:true,
                            nameLeader:true,
                            nameMember1:true,
                            nameMember2:true,
                            nameMember3:true,
                            numberContact:true,
                            composition:{
                                select:{
                                    leader:true,
                                    member1:true,
                                    member2:true,
                                    member3:true,
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    return result

}

const getChampionshipByLink = async (link:string) =>{

    const result = await prisma.championship.findFirst({
        where:{
            link:link,
            active:true
        }
    })

    if(!result) throw notFoundError("Championship not Found")

    return result

}

export {create, getChampionships, getChampionshipById, getChampionshipByLink}
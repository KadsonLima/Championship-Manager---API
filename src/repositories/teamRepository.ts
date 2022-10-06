import {prisma} from "../database";
import { TeamData } from "../interfaces/teamInterface";
import { UserData, UserReturn } from "../interfaces/userInterface";
import { conflictError, notFoundError } from "../utils/errorUtils";

const createTeam = async (body:TeamData) =>{

    const result = await prisma.team.create({
        data:body
    })
    
    return result

}

const registerTeamAndChamp = async (campId:number, teamId:number) =>{

    return await prisma.championshipAndTeam.create(
        {data:{campId, teamId}}
    )

}

const createComposition = async (body:any) =>{

    const result = await prisma.teamComposition.create({data:body})

    return result

}


export { createTeam, createComposition, registerTeamAndChamp }
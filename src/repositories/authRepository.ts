import {prisma} from "../config/database";
import { UserData, UserReturn } from "../interfaces/userInterface";
import { conflictError, notFoundError } from "../utils/errorUtils";

const create = async (body:UserData) =>{

    const result = await prisma.user.findFirst({where:{email:body.email}})

    if(result) throw conflictError("Email is already !")

    const userCreate:UserReturn = await prisma.user.create({
        data:body
    })

    return userCreate

}

const findByEmail = async (email:string) =>{
    

    const result = await prisma.user.findFirst({where:{email:email}})

    if(!result) throw notFoundError("User not found!")

    return result

}

export {create, findByEmail}
import {prisma} from "../database";
import { UserData } from "../interfaces/userInterface";

const create = (body:UserData) =>{

    return prisma.user.create({
        data:body
    })

}

const findByEmail = () =>{
    
}

export {create, findByEmail}
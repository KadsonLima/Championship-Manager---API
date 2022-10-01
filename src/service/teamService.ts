import { User } from "@prisma/client"
import bcrypt from 'bcrypt';
import { CreateUser, UserLogin } from "../interfaces/userInterface";
import * as authRepository from '../repositories/authRepository';
import { unauthorizedError } from "../utils/errorUtils";
import Jwt  from "jsonwebtoken";
const SECRET = Number(process.env.SECRET_BCRYPT);

const signUp = async ({name, email, password, confirm_password}:CreateUser) =>{

    const passwordEncrypt = bcrypt.hashSync(password, SECRET)
    
    const result = await authRepository.create({name, email, password:passwordEncrypt})
    
    delete result.password

    return result
}

const signIn = async ({ email, password }:UserLogin) =>{

    const User = await authRepository.findByEmail(email)

    const match = await bcrypt.compare(password, User.password)
    
    if(!match) throw unauthorizedError("Enter email and password correctly !")

    const SECRET_TOKEN = process.env.TOKEN_SECRET_KEY ?? '';

    const token = Jwt.sign({userId:User.id}, SECRET_TOKEN, {expiresIn:'7d'})

    return { name:User.name, token }

}

export {signUp, signIn}
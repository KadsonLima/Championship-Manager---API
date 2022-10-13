
import { Request, Response } from "express"
import * as authService from '../service/authService'


const signIn = async ( req:Request, res:Response ) =>{
    const { email, password } = req.body
    
    const result = await authService.signIn({email, password})

    res.status(200).send(result)
}

const signUp = async ( req:Request, res:Response ) =>{
    const { name, email, password, confirm_password } = req.body 

    const result = await authService.signUp({name, email, password, confirm_password})
    
    res.status(201).send(result)
}

export { signIn, signUp }

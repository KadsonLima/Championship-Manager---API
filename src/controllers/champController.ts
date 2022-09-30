
import { Request, Response } from "express"
import * as champService from '../service/champService'


const create = async ( req:Request, res:Response ) =>{
    const { email, password } = req.body
    
    const result = await champService.signIn({email, password})

    res.status(200).send(result)
}

const signUp = async ( req:Request, res:Response ) =>{
    const { name, email, password, confirm_password } = req.body 

    const result = await champService.signUp({name, email, password, confirm_password})
    
    res.status(201).send(result)
}

export { signIn, signUp }
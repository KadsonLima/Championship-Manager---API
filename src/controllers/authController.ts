
import { Request, Response } from "express"



const signIn = ( req:Request, res:Response ) =>{
    const { email, password } = req.body
    
    res.status(200)
}

const signUp = ( req:Request, res:Response ) =>{
    const { name, email, password, confirm_password } = req.body 
    
    res.status(201)
}

export { signIn, signUp }
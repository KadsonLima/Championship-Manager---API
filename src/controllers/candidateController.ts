
import { Request, Response } from "express"
import * as candidateService from '../service/candidateService'


const create = async ( req:Request, res:Response ) =>{  

    const curriculum = res.locals.imagem;
    
    const { name , numberContact, email} = req.body
    
    const result = await candidateService.create({  name , numberContact, email, curriculum})

    res.status(201).send(result)
}

const getCandidates = async ( req:Request, res:Response ) =>{
    

    const result = await candidateService.getCandidates()

    res.status(200).send(result)
}

const getJobDescription = async ( req:Request, res:Response ) =>{
    
    const {link} = req.params

    const result = await candidateService.getJobDescription(link)

    res.status(200).send(result)
}


export { create, getCandidates, getJobDescription}
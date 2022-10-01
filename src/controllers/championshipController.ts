
import { Request, Response } from "express"
import * as championshipService from '../service/championshipService'


const create = async ( req:Request, res:Response ) =>{
    const { name } = req.body
    
    const result = await championshipService.create({name})

    res.status(201).send(result)
}

const getChampionships = async ( req:Request, res:Response ) =>{

    const result = await championshipService.getChampionships()
    
    res.status(200).send(result)
}

export { create, getChampionships }
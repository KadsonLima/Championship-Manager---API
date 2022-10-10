
import { Request, Response } from "express"
import * as jobsService from '../service/jobsService'


const create = async ( req:Request, res:Response ) =>{

    const { name , description, tagId, expId } = req.body
    
    const result = await jobsService.create({ name , description})

    res.status(201).send(result)
}

const getjobs = async ( req:Request, res:Response ) =>{
    
    const result = await jobsService.getJobs()

    res.status(200).send(result)
}

const getJobById = async ( req:Request, res:Response ) =>{
    const id = Number(req.params.id)
    const result = await jobsService.getJobById(id)

    res.status(200).send(result)
}

const changeJob = async ( req:Request, res:Response ) =>{

    const id  = Number(req.params.id)
    
    const result = await jobsService.changeJob(id)

    res.status(201).send(result)
}

export { create, getjobs, changeJob, getJobById}
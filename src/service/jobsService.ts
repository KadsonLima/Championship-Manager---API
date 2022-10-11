import { jobsData } from "../interfaces/jobsInterface";
import * as jobsRepository from '../repositories/jobsRepository'
import {nanoid} from 'nanoid';
import { number } from "joi";

const create = async ({ name , description}:Omit<jobsData, 'link'>) =>{

    const link = nanoid()
    
    const result = await jobsRepository.create({ name , description, link})

    return result
}

const changeJob = async (id:number) =>{

    const result = await jobsRepository.changeJob(id)

    return result
}

const getJobById = async (id:number) =>{

    const job = await jobsRepository.getJobById(id)
    const candidates = await jobsRepository.getCandidatures(id);

    return  {job, candidates}
}

const getJobs = async () =>{

    const result = await jobsRepository.getJobs()

    return result
}

export { create, changeJob, getJobs, getJobById }
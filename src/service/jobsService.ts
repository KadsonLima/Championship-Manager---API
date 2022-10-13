import { jobsData , createJob} from "../interfaces/jobsInterface";
import * as jobsRepository from '../repositories/jobsRepository'
import {nanoid} from 'nanoid';
import { number } from "joi";
import { setTagsJob } from "../repositories/tagsRepository";
import { setExpJob } from "../repositories/expRepository";

const create = async (dataJob:createJob) =>{

    const link = nanoid()

    const { exps, tags, name , description } = dataJob
    
    const jobData = await jobsRepository.create({ name , description, link})

    await setTagsJob(jobData.id, tags)

    await setExpJob(jobData.id, exps)

    return jobData
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

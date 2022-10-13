
import { Candidate } from '@prisma/client';
import Joi from "joi";
import { CandidateData } from '../interfaces/candidateInterface';
import * as candidateRepository from '../repositories/candidateRepository'
import * as tagsRepository from '../repositories/tagsRepository'
import * as expsRepository from '../repositories/expRepository'
import { wrongSchemaError } from '../utils/errorUtils';

const create = async (candidateData:CandidateData) =>{

    const result = await candidateRepository.create(candidateData)

    return result
}

const getCandidates = async () =>{

    const candidates = await candidateRepository.getCandidates()

    const tags = await tagsRepository.getTags()

    const exps = await expsRepository.getExps()

    const result = {
        candidates,
        exps,
        tags
    }

    console.log(result)
    return result
}

const getJobDescription = async (link:string) =>{

    const result = await candidateRepository.getJobDescription(link)

    return result
}

export { create, getCandidates , getJobDescription}

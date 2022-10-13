import {Job} from '@prisma/client'


type jobsData = Omit<Job, 'id' | 'createdAt' | 'active'>

type createJob = {
    name:String,
    description:String,
    exps: number[],
    tags: number[]
}



export {jobsData, createJob}

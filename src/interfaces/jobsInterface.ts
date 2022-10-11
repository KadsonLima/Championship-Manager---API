import {Job} from '@prisma/client'


type jobsData = Omit<Job, 'id' | 'createdAt' | 'active'>





export {jobsData}
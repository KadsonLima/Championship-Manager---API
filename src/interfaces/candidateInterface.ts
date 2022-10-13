import {Candidate} from '@prisma/client'


type CandidateData = Omit<Candidate, 'id' | 'createdAt' >





export {CandidateData}

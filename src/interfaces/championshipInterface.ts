import {Championship} from '@prisma/client'


type ChampionshipData = Omit<Championship, 'id' | 'createdAt' | 'active'>





export {ChampionshipData}
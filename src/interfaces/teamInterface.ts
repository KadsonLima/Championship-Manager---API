import {Team} from '@prisma/client'


type TeamData = Omit<Team, 'id'>

type Races = "WR" | "WF" | "MG" | "WB" | "EA" | "EP"

type TeamBody = {
    nameTeam:string,
    nameLeader:string,
    nameMember1:string,
    nameMember2:string,
    nameMember3:string,
    numberContact:string,
    leader:Races,
    member1:Races,
    member2:Races,
    member3:Races
}



export {TeamData, TeamBody}
import { any } from "joi";
import { TeamData } from "../interfaces/teamInterface";
import { getChampionshipByLink } from "../repositories/championshipRepository";
import * as teamRepository from "../repositories/teamRepository";
import { unauthorizedError } from "../utils/errorUtils";
import { formatterTeam } from "../utils/formatterTeam";



const register = async (teamBody:any, camp:string) =>{
    
    const {id:campId} = await getChampionshipByLink(camp);
    const {races, team} = formatterTeam(teamBody)

    const {id} = await teamRepository.createComposition(races)
    team.compositionId = id
    const teamData = await teamRepository.createTeam(team)
    await teamRepository.registerTeamAndChamp(campId, teamData.id)
 

    return teamData
}


export { register }
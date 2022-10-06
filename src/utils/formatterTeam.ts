import { TeamBody } from "../interfaces/teamInterface";


export function formatterTeam(body:TeamBody){
    const {
        leader, nameLeader, nameMember1, nameMember2,nameMember3, member1, member2,member3, nameTeam,numberContact
    } = body;

    const races = { 
        leader,
        member1,
        member2,
        member3
    }

    const team = {
        nameTeam,
        numberContact,
        nameLeader,
        nameMember1,
        nameMember2,
        nameMember3,
        compositionId:0
    }


    return {team, races}
}
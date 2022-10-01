import { ChampionshipData } from "../interfaces/championshipInterface";
import * as championshipRepository from '../repositories/championshipRepository'
import {nanoid} from 'nanoid';

const create = async ({name}:Omit<ChampionshipData, 'link'>) =>{

    const link = nanoid()
    
    const result = await championshipRepository.create({name, link})

    return result
}

const getChampionships = async () =>{

    const result = await championshipRepository.getChampionships()

    return result

}

export {create, getChampionships}
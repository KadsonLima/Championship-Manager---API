import { ChampionshipData } from "../interfaces/championshipInterface";
import * as championshipRepository from '../repositories/championshipRepository'
import {nanoid} from 'nanoid';

const create = async ({name}:Omit<ChampionshipData, 'link'>) =>{

    const link = nanoid()
    
    const result = await championshipRepository.create({name, link})

    return result
}

const createNew = async (text:string, userId:number ) =>{
    
    const result = await championshipRepository.createNew(text, userId)

    return result
}

const getChampionships = async () =>{

    const result = await championshipRepository.getChampionships()

    return result

}

const getNews = async () =>{

    const result = await championshipRepository.getNews()

    return result

}

const getChampionshipById = async (id:number) =>{

    const result = await championshipRepository.getChampionshipById(id)

    return result 

}

export {create, getChampionships, getChampionshipById, createNew, getNews}
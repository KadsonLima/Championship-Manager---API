
import { Request, Response } from "express"
import * as teamService from '../service/teamService'


const registerTeam = async ( req:Request, res:Response ) =>{
    const {champ} = req.params;
    const teamBody = req.body;
    
    const result = await teamService.register(teamBody, champ)

    res.status(201).send(result)
}


export { registerTeam }
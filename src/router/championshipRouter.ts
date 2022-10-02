import { Router } from "express";
import { create, getChampionshipById, getChampionships } from "../controllers/championshipController";

const championshipRouter = Router()


championshipRouter.post('/championship', create);
championshipRouter.get('/championship', getChampionships);
championshipRouter.get('/championship/:id', getChampionshipById);

export default championshipRouter
import { Router } from "express";
import { create, getChampionships } from "../controllers/championshipController";

const championshipRouter = Router()


championshipRouter.post('/championship', create);
championshipRouter.get('/championship', getChampionships);

export default championshipRouter
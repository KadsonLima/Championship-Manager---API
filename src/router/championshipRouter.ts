import { Router } from "express";
import { create, getChampionshipById, getChampionships } from "../controllers/championshipController";
import { validateJWT } from "../middlewares/validateJwt";

const championshipRouter = Router()

championshipRouter.use(validateJWT())
championshipRouter.post('/championship', create);
championshipRouter.get('/championship', getChampionships);
championshipRouter.get('/championship/:id', getChampionshipById);

export default championshipRouter
import { Router } from "express";
import { create, getChampionshipById, getChampionships } from "../controllers/championshipController";
import schemaValidate from "../middlewares/schemaValidate";
import { validateJWT } from "../middlewares/validateJwt";
import createChampionshipInSchema from "../schemas/championshipSchemas/createChampionshipInSchema";

const championshipRouter = Router()

championshipRouter.use(validateJWT())
championshipRouter.post('',schemaValidate(createChampionshipInSchema), create);
championshipRouter.get('', getChampionships);
championshipRouter.get('/:id', getChampionshipById);

export default championshipRouter
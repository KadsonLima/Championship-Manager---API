import { Router } from "express";
import { create, createNew, getChampionshipById, getChampionships, getNews } from "../controllers/championshipController";
import schemaValidate from "../middlewares/schemaValidate";
import { validateJWT } from "../middlewares/validateJwt";
import createChampionshipInSchema from "../schemas/championshipSchemas/createChampionshipInSchema";

const championshipRouter = Router()

championshipRouter.use(validateJWT())
championshipRouter.post('',schemaValidate(createChampionshipInSchema), create);
championshipRouter.post('/new', createNew);
championshipRouter.get('/new', getNews);
championshipRouter.get('', getChampionships);
championshipRouter.get('/:id', getChampionshipById);

export default championshipRouter
import { Router } from "express";
import { registerTeam } from "../controllers/teamController";
import schemaValidate from "../middlewares/schemaValidate";
import registerSchema from "../schemas/registerSchema";

const teamRouter = Router()

teamRouter.post('/register/:champ',schemaValidate(registerSchema), registerTeam)

export default teamRouter
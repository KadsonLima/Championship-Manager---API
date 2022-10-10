import { Router } from "express";
import { changeJob, create, getJobById, getjobs } from "../controllers/jobsController";
import schemaValidate from "../middlewares/schemaValidate";
import { validateJWT } from "../middlewares/validateJwt";
import createjobsInSchema from "../schemas/jobsSchemas/createJobsSchema";

const jobsRouter = Router()

jobsRouter.use(validateJWT())
jobsRouter.post('',schemaValidate(createjobsInSchema), create);
jobsRouter.put('', changeJob);
jobsRouter.get('', getjobs);
jobsRouter.get('/:id', getJobById);

export default jobsRouter
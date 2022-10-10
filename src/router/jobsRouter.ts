import { Router } from "express";
import { changeJob, create, getJobById, getjobs } from "../controllers/jobsController";
import schemaValidate from "../middlewares/schemaValidate";
import { validateJWT } from "../middlewares/validateJwt";
import createjobsInSchema from "../schemas/jobsSchemas/createJobsSchema";
import multer from 'multer';
import uploadImage from "../service/firebaseService";


export const Multer = multer({
  storage: multer.memoryStorage(),
});

const jobsRouter = Router()

jobsRouter.use(validateJWT())
jobsRouter.post('',schemaValidate(createjobsInSchema), create);
jobsRouter.post('/curriculos', create);
jobsRouter.put('/:id', changeJob);
jobsRouter.get('', Multer.single("imagem"),uploadImage, getjobs);
jobsRouter.get('/:id', getJobById);

export default jobsRouter
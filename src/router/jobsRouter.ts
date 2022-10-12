import { Router } from "express";
import { changeJob, create, getJobById, getjobs } from "../controllers/jobsController";
import * as candidateController from '../controllers/candidateController'
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

jobsRouter.post('/curriculos',Multer.single("curriculum"),uploadImage,  candidateController.create);

jobsRouter.get('/curriculos', candidateController.getCandidates);

jobsRouter.put('/:id', changeJob);

jobsRouter.get('',getjobs);
jobsRouter.get('/:id', getJobById);

export default jobsRouter

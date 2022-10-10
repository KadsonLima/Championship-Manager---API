import { Router } from "express";
import { create, getJobDescription } from "../controllers/candidateController";
import multer from 'multer';
import uploadImage from "../service/firebaseService";


export const Multer = multer({
  storage: multer.memoryStorage(),
});

const registerRouter = Router()

registerRouter.get('/:link', getJobDescription);
registerRouter.post('/:id',Multer.single("curriculum"),uploadImage, create);

export default registerRouter
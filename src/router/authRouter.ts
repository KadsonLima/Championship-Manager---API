import { Router } from "express";
import { signIn, signUp } from "../controllers/authController";
import schemaValidate from "../middlewares/schemaValidate";
import signInSchema from "../schemas/authSchemas/signInSchema";
import signUpSchema from "../schemas/authSchemas/signUpSchema";

const authRouter = Router()


authRouter.post('/sign-in',schemaValidate(signInSchema), signIn);
authRouter.post('/sign-up',schemaValidate(signUpSchema), signUp);

export default authRouter
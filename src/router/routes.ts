import { Router } from 'express';
import authRouter from './authRouter';
import championshipRouter from './championshipRouter';
import teamRouter from './teamRouter';

const router = Router()
router.use(authRouter);
router.use(teamRouter);
router.use("/championship", championshipRouter);

export default router
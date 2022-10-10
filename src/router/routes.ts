import { Router } from 'express';
import authRouter from './authRouter';
import jobsRouter from './jobsRouter';
import registerRouter from './registerRouter';

const router = Router()
router.use(authRouter);
router.use("/jobs", jobsRouter);
router.use("/register", registerRouter);

export default router
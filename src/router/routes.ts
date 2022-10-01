import { Router } from 'express';
import authRouter from './authRouter';
import championshipRouter from './championshipRouter';

const router = Router()

router.use(authRouter)
router.use(championshipRouter)

export default router
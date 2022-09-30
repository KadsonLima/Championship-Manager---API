import { Router } from 'express';
import authRouter from './authRouter';
import champRouter from './champRouter';

const router = Router()

router.use(authRouter)
router.use(champRouter)

export default router
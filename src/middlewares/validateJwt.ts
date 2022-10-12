import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

dotenv.config();

export function validateJWT() {

  return (req: Request, res: Response, next: NextFunction) => {
    // 1 - Pego o token do headers
    const token = req.headers['authorization']?.split(" ")[1];

    if (!token) {
      return res.status(401).send('Token not sent');
    }

    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';

    try {
      // 2 - Valido o token
      const data = jwt.verify(token, SECRET);
      res.locals.user = data;
      next();
    } catch (error) {
      return res.status(401).send('Your token is not valid');
    }
  };
}

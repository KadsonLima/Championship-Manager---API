import firebaseAccountCredentials from "../config/firebase-key.json";
import { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import { notFoundError, wrongSchemaError } from "../utils/errorUtils";
import Joi from "joi";

const bodySchema = Joi.object().keys({

  name: Joi.string().required(),
  numberContact: Joi.string().required(),
  email: Joi.string().email().required(),
  
})

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

const BUCKET = "storagejobmanager.appspot.com";
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET,
  });
}

const bucket = admin.storage().bucket();

const uploadImage = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.file)

  if (!req.file) throw notFoundError("Curriculum not Found");
  const timeElapsed = Date.now();
  const nome = req.body.name;
  const imagem = req.file;
  const nomeArquivo = nome + "-" + imagem.originalname + new Date(timeElapsed);

  const file = bucket.file("curriculos/" + nomeArquivo);

  const stream = file.createWriteStream({
    metadata: {
      contentType: imagem.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.error(e);
  });

  stream.on("finish", async () => {
    //tornar o arquivo publico
    await file.makePublic();

    //obter a url publica
    res.locals.imagem = `https://storage.googleapis.com/${BUCKET}/curriculos/${nomeArquivo}`;

    next();
  });

  stream.end(imagem.buffer);
};

export default uploadImage;

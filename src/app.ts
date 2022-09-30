import cors from "cors"
import express from "express"
import "express-async-errors"
import { errorHandler } from "./middlewares/erroHandler"
import router from "./router/routes"


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

//process.env.NODE_ENV === "test" && app.use("/tests", testRouter)
app.use(errorHandler)

export default app

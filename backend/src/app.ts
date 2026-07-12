import express from "express"

import { env } from "./env.js"
import rootRouter from "./routes/root.router.js"

const app = express()
const PORT = env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', rootRouter);

export { app, PORT }

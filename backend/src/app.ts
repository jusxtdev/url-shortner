import express from "express"
import { config } from "dotenv"

import { env } from "./env.js"
import rootRouter from "./routes/root.router.js"
import { connectDB } from "./config/db.js"

config()

await connectDB()

const app = express()

const PORT = env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', rootRouter);

export { app, PORT }

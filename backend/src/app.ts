import express from "express"
import { config } from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import { env } from "./env.js"
import rootRouter from "./routes/root.router.js"
import { connectDB } from "./config/db.js"

config()

await connectDB()

const app = express()
const PORT = env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const allowedOrigins = [
    env.FRONTEND_URL,
    "http://localhost:5173"
]

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) {
                // allow without origin - ex = Postman
                return callback(null, true)
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true)
            }

            callback(new Error("Not Allowed by cors"))
        },
        credentials: true
    })
)

app.use('/', rootRouter);

export { app, PORT }

import express, { Request, Response } from "express"
import { env } from "./env.js"

const app = express()
const PORT = env.PORT

app.get('/', (_req: Request, res: Response) => {
    res.send("<h1>URL SHORTNER</h1>")
})

export { app, PORT }

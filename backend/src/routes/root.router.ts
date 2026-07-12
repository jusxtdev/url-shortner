import express, { Request, Response } from "express";
import urlRouter from "./urls.router.js"
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send("<h1>URL SHORTNER</h1>")
})

router.use('/url', urlRouter);

export default router;

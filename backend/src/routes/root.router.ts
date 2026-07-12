import express, { Request, Response } from "express";

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send("<h1>URL SHORTNER</h1>")
})

export default router;

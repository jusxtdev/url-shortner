import { prisma } from "@/config/db.js"
import { env } from "@/env.js"
import URLService from "@/service/urls.service.js"
import { Request, Response } from "express"

const newURL = async (req: Request, res: Response) => {
    const { original_url } = req.body
    const newURLinDB = await URLService.addURL(prisma, original_url);

    // generate short_URL
    const FE_URL = env.NODE_ENV === "production" ? env.FRONTEND_URL : "http://localhost:5173"
    const short_URL = `${FE_URL}/${newURLinDB.short}`

    res.status(200).json({
        status: false,
        short_URL: short_URL
    })
}

const URLController = { newURL }

export default URLController;

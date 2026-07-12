import { prisma } from "@/config/db.js"
import URLService from "@/service/urls.service.js"
import { Request, Response } from "express"

const newURL = async (req: Request, res: Response) => {
    const { original_url } = req.body
    const newURLinDB = await URLService.addURL(prisma, original_url);
    res.status(200).json({
        status: false,
        data: newURLinDB
    })
}

const URLController = { newURL }

export default URLController;

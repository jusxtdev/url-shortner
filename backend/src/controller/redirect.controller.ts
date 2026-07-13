import { prisma } from "@/config/db.js";
import URLService from "@/service/urls.service.js";
import { Request, Response } from "express"

const redirect = async (req: Request, res: Response) => {
    const short = req.params.short as string;
    const original = await URLService.getOriginalUrl(prisma, short);

    res.redirect(original)
}

const redirectController = { redirect }

export default redirectController;


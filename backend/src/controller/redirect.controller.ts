import { prisma } from "../config/db.js";
import URLService from "../service/urls.service.js";
import { Request, Response } from "express"

const redirect = async (req: Request, res: Response) => {
    const short = req.params.short as string;

    const original = await URLService.getOriginalUrl(prisma, short);
    URLService.increment_visit_count(prisma, original.id)

    res.redirect(original.original_url);
}

const redirectController = { redirect }

export default redirectController;


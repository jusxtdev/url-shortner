import { PrismaClient } from "@prisma/client/extension";
import { Prisma } from "../generated/prisma/client.js"
import generateString from "../utils/generateString.js";

const addURL = async (
    tx: Prisma.TransactionClient | PrismaClient,
    original_url: string,
) => {

    // generate random String
    const short = generateString();
    let newURL
    try {
        newURL = await tx.urls.create({
            data: {
                original_url: original_url,
                short: short,
                visit_count: 0
            }
        })
    } catch (e) {
        console.error(e)
        return
    }

    return newURL;
}

const getOriginalUrl = async (
    tx: Prisma.TransactionClient | PrismaClient,
    short: string
) => {
    let original;

    try {
        original = await tx.urls.findFirst({
            where: {
                short: short
            }
        })
    } catch (e) {
        console.error(e);
        return
    }
    return original
}

const increment_visit_count = async (
    tx: Prisma.TransactionClient | PrismaClient,
    url_id: number
) => {
    try {
        const updated_count = await tx.urls.update({
            where: {
                id: url_id
            },
            data: {
                visit_count: {
                    increment: 1
                }
            },
            select: {
                id: true,
                visit_count: true
            }
        })
        return updated_count;
    } catch (error) {
        console.error(error);
    }
}

const URLService = { addURL, getOriginalUrl, increment_visit_count }
export default URLService

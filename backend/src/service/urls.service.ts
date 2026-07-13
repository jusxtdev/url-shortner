import { Prisma } from "@/generated/prisma/client.js"
import generateString from "@/utils/generateString.js";
import { PrismaClient } from "@prisma/client/extension";

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
    return original?.original_url
}
const URLService = { addURL, getOriginalUrl }
export default URLService

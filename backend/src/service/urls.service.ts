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
    }

    return newURL;
}

const URLService = { addURL }
export default URLService

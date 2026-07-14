import { PrismaClient } from "@prisma/client/extension";
import { Prisma } from "../generated/prisma/client.js"

const createUser = async (
    tx: Prisma.TransactionClient | PrismaClient,
    username: string,
    hashed: string
) => {
    let newUser
    try {
        newUser = await tx.users.create({
            data: {
                username: username,
                password: hashed
            }
        })
        return newUser
    } catch (error) {
        console.error(error)
    }
}

const UserService = {
    createUser
}
export default UserService

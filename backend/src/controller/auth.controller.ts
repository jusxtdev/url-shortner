import { Request, Response } from "express"
import { LoginInput, SignUpInput } from "../schema/users.schema.js"
import bcrypt from "bcrypt"
import UserService from "../service/user.service.js"
import { prisma } from "../config/db.js"
import generateToken, { jwtPayload } from "../utils/generateToken.js"
import storeCookie from "../utils/storeCookie.js"

const signup = async (req: Request, res: Response) => {
    const data: SignUpInput = req.body

    const SALT = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(data.password, SALT)

    const newUser = await UserService.createUser(prisma, data.username, hashedPass);

    const payload: jwtPayload = {
        userId: newUser.id
    }
    const token = generateToken(payload)

    storeCookie("jwt", token, res)

    return res.status(200).json({
        status: true,
        msg: "Signup Successful",
        token: token
    })
}

const login = async (req: Request, res: Response) => {
    const data: LoginInput = req.body
}

const AuthController = {
    signup,
    login
}
export default AuthController

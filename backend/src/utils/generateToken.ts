import jwt from "jsonwebtoken"
import { env } from "../env.js"

export type jwtPayload = {
    userId: number,
}

const generateToken = (payload: jwtPayload) => {
    const token = jwt.sign(payload, env.JWT_SECRET, {
        expiresIn: env.JWT_EXPIRES_IN
    })
    return token
}
export default generateToken

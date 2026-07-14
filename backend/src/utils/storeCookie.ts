import { Response, type CookieOptions } from "express"
import { env } from "../env.js"

const isProduction = env.NODE_ENV === "production"

const isHTTPSRequest = (res?: Response) => {
    return res?.req.secure || res?.req.headers["x-forwarded-proto"] === "https";
}

export const getAuthCookieOptions = (res?: Response): CookieOptions => {
    const needsCrossSiteCookies = isProduction || isHTTPSRequest(res)

    return {
        httpOnly: true,
        secure: needsCrossSiteCookies,
        sameSite: needsCrossSiteCookies ? "none" : "lax"
    }
}


const storeCookie = (title: string, data: any, res: Response) => {
    res.cookie(title, data, {
        ...getAuthCookieOptions(res),
        maxAge: 1000 * 60 * 60 * 24 * 7
    })
}

export default storeCookie

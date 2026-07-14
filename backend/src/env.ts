import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"
import { config } from "dotenv"

config();


export const env = createEnv({
    server: {
        PORT: z.coerce.number(),
        DATABASE_URL: z.url(),
        FRONTEND_URL: z.string(),
        NODE_ENV: z.string(),
        JWT_SECRET: z.string(),
        JWT_EXPIRES_IN: z.coerce.number()
    },
    runtimeEnv: process.env
})

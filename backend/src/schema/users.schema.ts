import { z } from "zod"

const signupSchema = z.object({
    username: z.string(),
    password: z.string().min(3).max(30),
})
export type SignUpInput = z.infer<typeof signupSchema>


const loginSchema = z.object({
    username: z.string(),
    password: z.string().min(3).max(30),
})
export type LoginInput = z.infer<typeof loginSchema>

const UserSchema = {
    signupSchema,
    loginSchema
}
export default UserSchema
